import React, { Fragment } from "react";
import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import CommentList from "./commentList/CommentList";
import Headers from "../../../components/layout/Header/Headers"
import Footer from "../../../components/layout/Footer/Footer"



function CommentListPage() {
  return (
    <Fragment>
      <Headers/>
      <Container>
        <Card>
          <CommentList />
        </Card>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CommentListPage;
