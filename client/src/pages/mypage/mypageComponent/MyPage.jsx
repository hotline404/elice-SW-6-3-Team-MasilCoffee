import React, { Fragment } from "react";
import {  useSelector } from "react-redux";

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
  const userInfo = useSelector(state => state.user);
  const userI = useSelector(state => state)
  console.log("userI", userI);
  return (
    <Fragment>
      <Container>
        <Title>MY PAGE</Title>
        <Card>
          <Contents>
            <User userName={userInfo.nickname} userId={userInfo.user_id} email={userInfo.email}/>
          </Contents>
          <Contents>
            <OrderLink userId={userInfo.user_id}/>
            <CommentLink userId={userInfo.user_id}/>
          </Contents>
          <ContentsByWrite>
            <WriteListLink userId={userInfo.user_id}/>
          </ContentsByWrite>
        </Card>
      </Container>
    </Fragment>
  );
}

export default MyPage;

