import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosGetUser } from "../../../api/user/user";
import { getUser } from "../../../redux/action/user/userAction";

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
  const dispatch = useDispatch()
  const token = useSelector(state => state.login.token);
  const userInfo = useSelector(state => state.user);

  console.log("userInfo", userInfo)

  useEffect(() => {
    const fn = async (token) => {
      try {
        const user = await axiosGetUser(token);
        console.log(">>> [my page] ✅ SUCCESS", user); 
        
        dispatch(getUser(user));
      } catch (err) {
        console.log(">>> [my page] ❌ ERROR", err);
      }
    };
    fn(token);
  }, [dispatch]);


  return (
    <Fragment>
      <Container>
        <Title>MY PAGE</Title>
        <Card>
          <Contents>
            <User userName={userInfo.nickname}/>
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

