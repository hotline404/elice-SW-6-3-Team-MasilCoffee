import React from "react";

import LinkTo from "../../ui/Link/LinkTo";

import { Header, LeftSide, RightSide } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";

const linkRight = [
  {
    to: ROUTES.LOGIN.path,
    name: "LOGIN"
  },
  {
    to: ROUTES.REGISTER.path,
    name: "REGISTER"
  },
  {
    to: ROUTES.MYPAGE.path,
    name: "MYPAGE"  
  }
]

const linkLeft = [
  {
    to: ROUTES.MAIN.path,
    name: "마실커피"
  },
  {
    to: ROUTES.ORDER.path,
    name: "ORDER"
  },
  {
    to: ROUTES.RECIPE.path,
    name: "RECIPE"
  }
]

function Headers(props) {
  return (
    <div>
      <Header location={props.location}>
        <LeftSide>
          {linkLeft.map(link => {
            return (
              <LinkTo there={{to: link.to, name: link.name}} style={{textDecoration:"none", textAlign: "center", color: `${props.location == "/Recipe" ? "#191414" : "#f5f5f5"}`, fontSize: "15px",fontWeight: "400", margin: "27px"}}/>
            )
          })}
        </LeftSide>
        <RightSide>
          {linkRight.map(link => {
            return (
              <LinkTo there={{to: link.to, name: link.name}} style={{textDecoration:"none", textAlign: "center", color: `${props.location == "/Recipe" ? "#191414" : "#f5f5f5"}`, fontSize: "15px",fontWeight: "400", margin: "27px"}}/>
            )
          })}
        </RightSide>
      </Header>
    </div>
  );
}

export default Headers;
