import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosGetUsers } from "../../../api/user";
import { initUserSearch } from "../../../redux/action/userAction";

import Container from "../../../components/ui/container/Container";
import Title from "../../../components/ui/title/Title";
import Card from "../../../components/ui/card/Card";
import Contents from "../../../components/ui/contents/Contents";

import { ContentsByWrite } from "../style/MyPage.style";

import User from "./Links/User";
import OrderLink from "./Links/OrderLink";
import CommentLink from "./Links/CommentLink";
import WriteListLink from "./Links/WriteListLink";

function MyPage() {
  const dispatch = useDispatch

  useEffect(() => {
    const fn = async () => {
      try {
        const users = await axiosGetUsers();
        dispatch(initUserSearch(users));

        console.log(">>> [my page] ✅ SUCCESS", users);
      } catch (err) {
        console.log(">>> [my page] ❌ ERROR", err);
      }
    };
    fn();
  }, [dispatch]);


  return (
    <Fragment>
      <Container>
        <Title>MyPage</Title>
        <Card>
          <Contents>
            <User />
          </Contents>
          <Contents>
            <OrderLink />
            <CommentLink />
          </Contents>
          <ContentsByWrite>
            <WriteListLink />
          </ContentsByWrite>
        </Card>
      </Container>
    </Fragment>
  );
}

export default MyPage;

