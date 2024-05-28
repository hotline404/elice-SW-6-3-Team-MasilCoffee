import React from "react";
import LinkTo from "../../../ui/Link/LinkTo";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
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
})

const items = [
  {
    to: ROUTES.MYPAGE.path,
    name: "마이페이지",
  },
  {
    to: ROUTES.LOGOUT.path,
    name: "로그아웃",
  },
];

function UserRightSideItem({location, onVisible}) {
  const style = getLinkStyle(location)

  /* 리스트 키값 부여 */
  return (
    <RightSide>
      {items.map((link) => {
        return (
          <LinkTo key={link.to} there={{ to: link.to, name: link.name }} style={style} />
        );
      })}
      <NavButton location={location} onClick={onVisible}>
        <TfiMenu />
      </NavButton>
    </RightSide>
  );
}

/* 타입 안정화 */
UserRightSideItem.propsTypes = {
  location: PropTypes.string.isRequired,
  onVisible: PropTypes.func.isRequired,
}

export default UserRightSideItem;
