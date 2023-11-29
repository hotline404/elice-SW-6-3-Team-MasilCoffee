import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Background, ContainerWrap, Container, Wrap } from "../Recipe.style";
import * as S from "./RecipeView.style";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput";
import CommentList from "../components/CommentList";
import { getComments } from "../../../api/comment";
// import commentData from "../commentData.json";

const RecipeView = () => {
  const oneBoardData = useSelector((state) => state.board.board[0]);
  let commentData;
  
  useEffect(() => {
    const fn = async () => {
      try {
        commentData = await getComments(oneBoardData._id);
        console.log("RecipeView 댓글", commentData)
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
            {/* {commentData.map((comment) => (
              <CommentList comment={comment} />
            ))} */}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </ContainerWrap>
    </Background>
  );
};

export default RecipeView;
