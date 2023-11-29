import React from "react";
import * as S from "./style/Post.style";
import { Container } from "../Recipe.style";
import { TextWrap } from "../recipeView/RecipeView.style";
import DateFormat from "../../../util/DateFormat/DateFormat";

const CommentList = ({ comment }) => {
  const createDate = DateFormat("dateTime", comment.createdAt);

  return (
    <TextWrap>
      <Container>
        <div>
          <S.PostNickname>{comment.nickname}</S.PostNickname>
          <S.PostDate>{createDate}</S.PostDate>
          <div>{comment.comment}</div>
        </div>
      </Container>
    </TextWrap>
  );
};

export default CommentList;
