import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Background, ContainerWrap, Container, Wrap } from "../Recipe.style";
import * as S from "./RecipeView.style";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput";
import CommentList from "../components/CommentList";
import commentData from "../commentData.json";
import { getBoard } from "../../../api/board";

// 수정/삭제 추가 예정
const RecipeView = () => {
  const location = useLocation();
  const boardId = location.state && location.state.post;
  const [boardData, setBoardData] = useState(null);
  
  useEffect(() => {
    const fn = async () => {
      try {
        const board = await getBoard(boardId);
        setBoardData(board);
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
        {boardData ? (
          <>
            <Wrap>
              <PostList post={boardData} />
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
            {commentData.map((comment) => (
              <CommentList comment={comment} />
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </ContainerWrap>
    </Background>
  );
};

export default RecipeView;
