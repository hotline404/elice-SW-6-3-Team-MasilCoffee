import React from "react";
import * as S from "./style/Post.style";
import { Container } from "../Recipe.style";
import { TextWrap } from "../recipeView/RecipeView.style";

const CommentList = ({ comment }) => {
  return (
    <TextWrap>
      <Container>
        <div>
          <S.PostNickname>{comment.nickname}</S.PostNickname>
          <S.PostDate>{comment.date}</S.PostDate>
          <div>{comment.content}</div>
        </div>
      </Container>
    </TextWrap>
  );
};

export default CommentList;
