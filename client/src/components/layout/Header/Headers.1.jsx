import React from "react";
import LeftSideItem from "./heander_item/LeftSideItem";
import TransComponent from "./heander_item/TransComponent";
import { Header, MiniLogo } from "./Headers.style";
import { useSelector } from "react-redux";
import { linkDatas } from "./Headers";

export function Headers(props) {
  const role = useSelector((state) => state.login.role);
  const isToken = useSelector((state) => state?.login?.token) ? true : false;
  console.log(isToken);

  return (
    <div>
      <Header location={props.location}>
        <MiniLogo />
        <LeftSideItem item={linkDatas.left_side} location={props.location} />
        <TransComponent
          userRole={role}
          linkDatas={linkDatas}
          location={props.location}
        />
      </Header>
    </div>
  );
}
