import React, { Fragment } from "react";
import Container from "../../../components/ui/container/Container";
import Title from "../../../components/ui/title/Title";
import Card from "../../../components/ui/card/Card";
import Contents from "../../../components/ui/contents/Contents";

import { ContentsByWrite } from "../style/MyPage.style";

import User from "./Links/User";
import OrderLink from "./Links/OrderLink";
import CommentLink from "./Links/CommentLink";
import WriteListLink from "./Links/WriteListLink";
import Headers from "../../../components/layout/Header/Headers";
import Footer from "../../../components/layout/Footer/Footer";

function MyPage() {
  return (
    <Fragment>
      <Headers />
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
      <Footer />
    </Fragment>
  );
}

export default MyPage;

