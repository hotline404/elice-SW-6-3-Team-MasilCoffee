import React from "react";
import { useNavigate } from "react-router-dom";

import LinkTo from "../../ui/Link/LinkTo";

import { Header, LeftSide, RightSide, HeaderImg } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";
import IncludeRedPage from "../../../util/IncludeRedPage";
import { useSelector } from "react-redux";

const linkDatas = {
  right_side: [
    {
      to: ROUTES.REGISTER.path,
      name: "회원가입",
    },
    {
      to: ROUTES.MYPAGE.path,
      name: "마이페이지",
    },
  ],
  left_side: [
    {
      to: ROUTES.ORDER.path,
      name: "MENU",
    },
    {
      to: ROUTES.RECIPE.path,
      name: "꿀조합",
    },
  ],
};

function Headers(props) {
  const nav = useNavigate();
  const isLogin = useSelector((state) => state.login.loginState);

  const transLog = !isLogin ? "로그인" : "로그아웃";
  const transPath = !isLogin ? ROUTES.LOGIN.path : ROUTES.LOGOUT.path;
  
  // style need amending
  const style = {
    textDecoration: "none",
    textAlign: "center",
    color: `${IncludeRedPage(props.location) ? "#191414" : "#f5f5f5"}`,
    fontSize: "15px",
    fontWeight: "400",
    margin: "27px",
    cursor: "pointer",
  };

  // transLogo need amending
  const transLogo = IncludeRedPage(props.location)
    ? "/assets/images/Logo_White.png"
    : "/assets/images/Logo_Red.png";

  const handleClickLogo = () => {
    nav(ROUTES.MAIN.path, { replace: false });
  };

  return (
    <div>
      <Header location={props.location}>
        <LeftSide>
          <HeaderImg src={transLogo} onClick={handleClickLogo} />
          {linkDatas.left_side.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
        </LeftSide>
        <RightSide>
          <LinkTo
            there={{ to: `${transPath}`, name: `${transLog}` }}
            style={style}
          />

          {linkDatas.right_side.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
        </RightSide>
      </Header>
    </div>
  );
}

export default Headers;
