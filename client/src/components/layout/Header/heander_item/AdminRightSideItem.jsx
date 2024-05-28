import React from "react";
import PropTypes from "prop-types";
import LinkTo from "../../../ui/Link/LinkTo";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
import { RightSide, NavButton } from "../Headers.style";
import { TfiMenu } from "react-icons/tfi";
import { txt_color } from "../../../../type/color_type";

const items = [
  {
    to: ROUTES.ADMINORDER.path,
    name: "관리자 페이지",
  },
  {
    to: ROUTES.LOGOUT.path,
    name: "로그아웃",
  },
];
/* 스타일 함수화 및 분리 */

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

const AdminRightSideItem = ({ location, onVisible }) => {
  const style = getLinkStyle(location);

  /*리스트 키값 부여*/
  /*
    react는 리스트에 고유한 키 값이 없으면 리스트 전체를 재렌더링
    키값을 부여하면 필요한 렌더링만 하게된다.
  */

  return (
    <RightSide>
      {items.map((link) => (
        <LinkTo key={link.to} there={{ to: link.to, name: link.name }} style={style} />
      ))}
      <NavButton location={location} onClick={onVisible}>
        <TfiMenu />
      </NavButton>
    </RightSide>
  );
};

/* propsType으로 타입 안정성 확보 */
/*
  1. 오류 방지
  2. 코드 가독성 향상
  3. 자동 완성 및 타입 체크 지원

  잘못된 타입이 전달될 경우 경고 메시지가 출력
*/

AdminRightSideItem.propTypes = {
  location: PropTypes.string.isRequired,
  onVisible: PropTypes.func.isRequired,
};

export default AdminRightSideItem;
