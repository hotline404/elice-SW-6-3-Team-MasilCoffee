import React from "react";

import LinkTo from "../../ui/Link/LinkTo";

import { Header, LeftSide, RightSide } from "./Headers.style";

const linkRight = [
  {
    to: "/login",
    name: "LOGIN"
  },
  {
    to: "/Register",
    name: "REGISTER"
  }
]

const linkLeft = [
  {
    to: "/",
    name: "마실커피"
  },
  {
    to: "/Order",
    name: "ORDER"
  },
  {
    to: "/Recipe",
    name: "RECIPE"
  }
]

function Headers() {
  return (
    <div>
      <Header>
        <LeftSide>
          {linkLeft.map(link => {
            return (
              <LinkTo there={{to: link.to, name: link.name}} style={{textDecoration:"none", textAlign: "center", color: "#f5f5f5", fontSize: "15px",fontWeight: "400", margin: "27px"}}/>
            )
          })}
        </LeftSide>
        <RightSide>
          {linkRight.map(link => {
            return (
              <LinkTo there={{to: link.to, name: link.name}} style={{textDecoration:"none", textAlign: "center", color: "#f5f5f5", fontSize: "15px",fontWeight: "400", margin: "27px"}}/>
            )
          })}
        </RightSide>
      </Header>
    </div>
  );
}

export default Headers;
