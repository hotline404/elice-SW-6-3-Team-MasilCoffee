import React, { Fragment } from "react";
import Container from "../UI/Container";
import Title from "../UI/Title";
import Card from "../UI/Card";

import { Contents } from "./MyPage.style";
import { ContentsByWrite } from "./MyPage.style";

import User from "./componentsDetails/User";
import OrderLink from "./componentsDetails/OrderLink";
import CommentLink from "./componentsDetails/CommentLink";
import WriteListLink from "./componentsDetails/WriteListLink";

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

