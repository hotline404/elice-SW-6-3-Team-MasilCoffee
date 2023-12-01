import React, { Fragment } from "react";
import {  useSelector } from "react-redux";

import Container from "../../../components/ui/container/Container";
import Title from "../../../components/ui/title/Title";
import Card from "../../../components/ui/card/Card";
import { MyPageFirstContents, MyPageMiddleContents, ContentsByWrite } from "../style/MyPage.style";

import User from "./Links/User";
import OrderLink from "./Links/OrderLink";
import CommentLink from "./Links/CommentLink";
import WriteListLink from "./Links/WriteListLink";


function MyPage() {
  const userInfo = useSelector(state => state.user);
  
  return (
    <Fragment>
      <Container>
        <Title>MY PAGE</Title>
        <Card> 
          <MyPageFirstContents>
            <User userName={userInfo.nickname} email={userInfo.email}/>
          </MyPageFirstContents>
          <MyPageMiddleContents>
            <OrderLink userId={userInfo.email}/>
            <CommentLink userId={userInfo.email}/>
          </MyPageMiddleContents>
          <ContentsByWrite>
            <WriteListLink userId={userInfo.email}/>
          </ContentsByWrite>
        </Card>
      </Container>
    </Fragment>
  );
}

export default MyPage;

