import React from "react";
import { useSelector } from "react-redux";
import * as S from "./style/Post.style";
import { Container, StyledLink } from "../Recipe.style";
import { TextWrap } from "../recipeView/RecipeView.style";
import DateFormat from "../../../util/DateFormat/DateFormat";

const CommentList = ({ comment }) => {
  const createDate = DateFormat("dateTime", comment.createdAt);
  const userId = useSelector((state) => state.user.user_id); //로그인 한 유저 아이디

  //댓글 수정하기
  const handleEdit = (event, commentId) => {
    event.preventDefault();

    alert("수정");
  }

  //댓글 삭제하기
  const handleDelete = (event, commentId) => {
    event.preventDefault();

    alert("삭제");
  }

  return (
    <TextWrap>
      <Container>
        <div>
          <S.PostNickname>{comment.nickname}</S.PostNickname>
          <S.PostDate>{createDate}</S.PostDate>
          {comment.author._id === userId && (
            <S.EditDeleteWrap>
              <S.EditDelete onClick={(e) => handleEdit(e, comment._id)}>
                수정
              </S.EditDelete>
              <span>│</span>
              <S.EditDelete onClick={(e) => handleDelete(e, comment._id)}>
                삭제
              </S.EditDelete>
            </S.EditDeleteWrap>
          )}
          <div>{comment.comment}</div>
        </div>
      </Container>
    </TextWrap>
  );
};

export default CommentList;
