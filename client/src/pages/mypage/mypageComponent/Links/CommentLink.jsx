import React from "react";
import * as S from "../../style/MyPage.style";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";

function CommentLink({ userId }) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`${ROUTES.COMMENTLISTPAGE.path}/${userId}`);
  };
  return (
    <div onClick={handleClick}>
      <S.CommentLinkBox>내가 쓴 댓글</S.CommentLinkBox>
    </div>
  );
}

export default CommentLink;
