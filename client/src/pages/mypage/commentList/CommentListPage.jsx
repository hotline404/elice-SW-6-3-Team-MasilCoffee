import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import CommentList from "./commentList/CommentList";
import Contents from "../../../components/ui/contents/Contents";
import { getMyComment } from "../../../api/comment";
import DateFormat from "../../../util/DateFormat/DateFormat";

function CommentListPage() {
  const token = useSelector((state) => state.login.token);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (token) {
      fetchComments();
    }
  }, [token]);

  const fetchComments = async () => {
    try {
      const commentRes = await getMyComment();
      if (commentRes.status === 200) {
        setComments(commentRes.data.data);
      }
    } catch (error) {
      console.error("댓글 불러오기 에러:", error);
    }
  };

  const dateType = "dateTime";
  const trData = ["번호", "댓글", "작성날짜"];
  const tdData = comments.map((item, index) => {
    const date = DateFormat(dateType, item.createdAt);
    return [index + 1, item.comment, date];
  });

  return (
    <Fragment>
      <Container>
        <Contents>
          <Card NonFlex>
            <CommentList trData={trData} tdData={tdData} />
          </Card>
        </Contents>
      </Container>
    </Fragment>
  );
}

export default CommentListPage;
