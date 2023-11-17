import React from "react";
import { Link } from "react-router-dom";
import * as S from "../MyPage.style";

User.defaultProps = {
  userName: "김영준",
};

function User({ userName }) {
  return (
    <div>
      <S.UserLinkBox>
        <>
          안녕하세요! <br /> {userName}님
          <Link to="/ConfirmPassword">
            <S.LinkUserInfo>회원 정보 변경</S.LinkUserInfo>
          </Link>
        </>
      </S.UserLinkBox>
    </div>
  );
}

export default User;
