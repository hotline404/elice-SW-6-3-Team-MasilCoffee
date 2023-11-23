import React from 'react'
import LinkTo from '../../../ui/Link/LinkTo';
import { HeaderImg, LeftSide } from '../Headers.style';
import IncludeRedPage from '../../../../util/IncludeRedPage';
import { ROUTES } from '../../../../router/Routes';
import { useNavigate } from 'react-router-dom';



function LeftSideItem(props) {
  const nav = useNavigate();
  

  const style = {
    textDecoration: "none",
    textAlign: "center",
    color: `${IncludeRedPage(props.location) ? "#191414" : "#f5f5f5"}`,
    fontSize: "15px",
    fontWeight: "400",
    margin: "27px",
    cursor: "pointer",
  };

  const transLogo = IncludeRedPage(props.location)
  ? "/assets/images/Logo_White.png"
  : "/assets/images/Logo_Red.png";

  const handleClickLogo = () => {
    nav(ROUTES.MAIN.path, { replace: false });
  };

  return (
    <LeftSide>
      <HeaderImg src={transLogo} onClick={handleClickLogo} />
          {props.item.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
    </LeftSide>
  )
}

export default LeftSideItem
