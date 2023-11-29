import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Background, ContainerWrap, Container, Wrap } from "../Recipe.style";
import * as S from "./RecipeView.style";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput";
import CommentList from "../components/CommentList";
import { getComments } from "../../../api/comment";

const RecipeView = () => {
  const oneBoardData = useSelector((state) => state.board.board[0]);
  const [commentData, getCommentData] = useState("");
  
  useEffect(() => {
    const fn = async () => {
      try {
        const comment = await getComments(oneBoardData._id);
        getCommentData(comment);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <ContainerWrap>
        {oneBoardData ? (
          <>
            <Wrap>
              <PostList post={oneBoardData} type={"view"} />
            </Wrap>
            <S.TextWrap>
              <Container>
                <PostInput
                  input={{
                    type: "text",
                    placeholder: "댓글을 작성해주세요.",
                  }}
                  button={{
                    text: "작성",
                    type: "red",
                  }}
                />
              </Container>
            </S.TextWrap>
            {commentData.length > 0 ?
              (commentData.map((comment) => (
                <CommentList comment={comment} />
              ))
              ) : (
                <div style={{ textAlign: "center" }}>
                  작성된 댓글이 없습니다.
                </div>
            )}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </ContainerWrap>
    </Background>
  );
};

export default RecipeView;
