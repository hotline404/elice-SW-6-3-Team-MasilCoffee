import React from "react";
import LeftSideItem from "./heander_item/LeftSideItem";
import UserRightSideItem from "./heander_item/UserRightSideItem";
import AdminRightSideItem from "./heander_item/AdminRightSideItem";
import NonUserRightSideItem from "./heander_item/NonUserRightSideItem";

import { Header } from "./Headers.style";
import { ROUTES } from "../../../router/Routes";
import { useSelector } from "react-redux";

const linkDatas = {
  non_user_right: [
    {
      to: ROUTES.REGISTER.path,
      name: "회원가입",
    },
  ],
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
  const role = useSelector((state) => state.user.role);
  const token = useSelector((state) => state.login);
  console.log("header token", token)

  const TransComponent = () => {
    switch (role) {
      case "Admin": {
        return (
          <AdminRightSideItem
            item={linkDatas.right_side}
            location={props.location}
          />
        );
      }

      case "User": {
        return (
          <UserRightSideItem
            item={linkDatas.right_side}
            location={props.location}
          />
        );
      }

      default:
        return (
          <NonUserRightSideItem
            item={linkDatas.non_user_right}
            location={props.location}
          />
        );
    }
  };

  return (
    <div>
      <Header location={props.location}>
        <LeftSideItem item={linkDatas.left_side} location={props.location} />
        <TransComponent />
      </Header>
    </div>
  );
}

export default Headers;

//
