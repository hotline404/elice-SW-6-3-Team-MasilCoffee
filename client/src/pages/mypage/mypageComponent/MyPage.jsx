import React, { Fragment } from "react";
import Container from "../UI/Container";
import Title from "../UI/Title";
import { Contents } from "./MyPage.style";
import { ContentsByWrite } from "./MyPage.style";

import User from "./componentsDetails/User";
import OrderLink from "./componentsDetails/OrderLink";
import CommentLink from "./componentsDetails/CommentLink";
import WriteListLink from "./componentsDetails/WriteListLink";
import Card from "../UI/Card";

function MyPage() {
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


// USERINFOCHANGE: {
//   path: "/UserInfoChange",
//   link: "/UserInfoChange",
//   element: <UserInfoChange />,
// },
// CONFIRMPASSWORD: {
//   path: "/ConfirmPassword",
//   link: "/ConfirmPassword",
//   element: <ConfirmPassword />,
// },
// ORDERDETAILS: {
//   path: "/OrderDetails",
//   link: "/OrderDetails",
//   element: <OrderDetails />,
// },
// WRITELIST: {
//   path: "/WriteList",
//   link: "/WriteList",
//   element: <WriteList />,
// },
// COMMENTLIST: {
//   path: "/CommentList",
//   link: "/CommentList",
//   element: <CommentList />,
// },