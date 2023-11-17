import React, { Fragment } from "react";
import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import CommentList from "./commentList/CommentList";


function CommentListPage() {
  return (
    <Fragment>
      <Container>
     
        <Card>
          <CommentList />
        </Card>
      </Container>
    </Fragment>
  );
}

export default CommentListPage;
