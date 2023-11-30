import React, { Fragment, useState, useEffect } from "react";
import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import CommentList from "./commentList/CommentList";
import Contents from "../../../components/ui/contents/Contents";
import { getMyComment } from "../../../api/comment";
import { useSelector } from "react-redux";

function CommentListPage() {
  const token = useSelector((state) => state.login.token);
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    axiosFn(token);
  }, [token]);

  const axiosFn = async () => {
    const commentRes = await getMyComment(token);

    console.log("commentRes", commentRes);

    // setData(current => {
    //   return {
    //     ...current,
    //     data:
    //   }
    // })
  };

  return (
    <Fragment>
      <Container>
        <Contents>
          <Card NonFlex>
            <CommentList />
          </Card>
        </Contents>
      </Container>
    </Fragment>
  );
}

export default CommentListPage;
