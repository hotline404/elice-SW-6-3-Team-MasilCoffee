import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Background, ContainerWrap, Container, Wrap } from "../Recipe.style";
import * as S from "./RecipeView.style";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput";
import CommentList from "../components/CommentList";
import commentData from "../commentData.json";
import { getBoard } from "../../../api/board";
import { actionGetBoard } from "../../../redux/action/boardAction";

// 수정/삭제 추가 예정
const RecipeView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const boardId = location.state && location.state.post;
  const [boardData, setBoardData] = useState(null);
  
  useEffect(() => {
    const fn = async () => {
      try {
        const board = await getBoard(boardId);
        dispatch(actionGetBoard(board));
        setBoardData(board);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
    window.scrollTo(0, 0);
  }, [boardId]);

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
                <PostInput placeholder={"댓글 작성"} text="작성" />
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
