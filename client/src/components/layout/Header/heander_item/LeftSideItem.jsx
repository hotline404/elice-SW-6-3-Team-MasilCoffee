import React, { useState } from "react";
import LinkTo from "../../../ui/Link/LinkTo";
import { HeaderImg, LeftSide, LinkBox } from "../Headers.style";
import IncludeRedPage from "../../../../util/IncludeRedPage";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";
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

const getLogoSrc = (location) => {
  const logoSrc =
    IncludeRedPage(location) ||
    ROUTES.ADMINMENU.path === location ||
    ROUTES.ADMINMUSER.path === location ||
    ROUTES.ADMINORDER.path === location
      ? "/assets/images/Logo_Red.png"
      : "/assets/images/Logo_White.png";

  return logoSrc;
};

function LeftSideItem({ location }) {
  const nav = useNavigate();
  const [toggle, setToggle] = useState("");

  const style = getLinkStyle(location);
  const logoSrc = getLogoSrc(location);

  const handleClickLogo = () => {
    nav(ROUTES.MAIN.path, { replace: false });
  };

  const handleToggle = (e) => {
    setToggle(e.target.value);
  };

  /* 리스트 키값 부여 */

  return (
    <LeftSide>
      <HeaderImg src={logoSrc} onClick={handleClickLogo} />
      {props.item.map((link, idx) => {
        return (
          <LinkBox
            value={idx}
            className={"btn" + (idx === toggle ? "active" : "")}
            onClick={handleToggle}
          >
            <LinkTo
              key={link.to}
              there={{ to: link.to, name: link.name }}
              style={style}
            />
          </LinkBox>
        );
      })}
    </LeftSide>
  );
}

/* 타입 안정성 */

LeftSideItem.propTypes = {
  location: propTypes.string.isRequired,
};

export default LeftSideItem;
