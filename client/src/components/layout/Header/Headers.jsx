import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";

import LeftSideItem from "./heander_item/LeftSideItem";
import TransComponent from "./heander_item/TransComponent";
import Menu from "./util/Menu";
import { Header, MiniLogo, HeaderBtn } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";

const linkDatas = {
  non_user_right: [
    { to: ROUTES.REGISTER.path, name: "회원가입" },
  ],
  right_side: [
    { to: ROUTES.REGISTER.path, name: "회원가입" },
    { to: ROUTES.MYPAGE.path, name: "마이페이지" },
  ],
  left_side: [
    { to: ROUTES.ORDER.path, name: "MENU" },
    { to: ROUTES.RECIPE.path, name: "꿀조합" },
  ],
};

const Headers = ({ location }) => {
  const role = useSelector((state) => state.login.role);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  /* 동일한 기능 묶어서 toggleVisibility -> 핸들러 함수 최적화 */

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const handleClickMiniLogo = () => {
    navigate(ROUTES.MAIN.path);
    (window.location || document.location).reload();
  };

  /* 불필요한 조건문 삭제 둘 다 참 값일 때 렌더링 -> visible && ... */
  return (
    <div>
      <Header location={location}>
        <MiniLogo src="/assets/images/Logo.png" onClick={handleClickMiniLogo} />
        <LeftSideItem item={linkDatas.left_side} location={location} />
        <TransComponent
          userRole={role}
          linkDatas={linkDatas}
          location={location}
          onVisible={toggleVisibility}
        />
        <HeaderBtn location={location} onClick={toggleVisibility}>
          <TfiMenu />
        </HeaderBtn>
      </Header>
      {visible && <Menu role={role} />}
    </div>
  );
};

/* 타입 안정화 */
Headers.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Headers;
