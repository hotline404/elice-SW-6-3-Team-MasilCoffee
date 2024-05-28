import React from "react";
import LinkTo from "../../../ui/Link/LinkTo";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
import { useSelector } from "react-redux";
import { RightSide, NavButton, LinkBox } from "../Headers.style";
import { TfiMenu } from "react-icons/tfi";
import { txt_color } from "../../../../type/color_type";

/* 함수 분리 */
const getLinkStyle = (location) => ({
  textDecoration: "none",
  textAlign: "center",
  color: `${
    IncludeRedPage(location) ||
    location === ROUTES.ADMINMENU.path ||
    location === ROUTES.ADMINORDER.path ||
    location === ROUTES.ADMINMUSER.path
      ? txt_color.main_color
      : txt_color.sub_color
  }`,
  fontSize: "15px",
  fontWeight: "400",
  margin: "27px",
  cursor: "pointer",
});

function NonUserRightSideItem({ location, item, onVisible }) {
  const isLogin = useSelector((state) => state.login.loginState);

  const transLog = !isLogin ? "로그인" : "로그아웃";
  const transPath = !isLogin ? ROUTES.LOGIN.path : ROUTES.LOGOUT.path;

  const style = getLinkStyle(location);

  /* 리스트 키값 부여 */
  return (
    <RightSide>
      <LinkTo
        there={{ to: `${transPath}`, name: `${transLog}` }}
        style={style}
      />

      {item.map((link) => {
        return (
          <LinkTo
            key={link.to}
            there={{
              to: link.to,
              name: link.name,
            }}
            style={style}
          />
        );
      })}
      <NavButton location={location} onClick={onVisible}>
        <TfiMenu />
      </NavButton>
    </RightSide>
  );
}

/* 타입 안정화 */
NonUserRightSideItem.propTypes = {
  location: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
  onVisible: PropTypes.func.isRequired
}

export default NonUserRightSideItem;
