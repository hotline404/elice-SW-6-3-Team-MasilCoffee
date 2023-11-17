import React, { Fragment } from "react";
import Container from '../UI/Container';
import Card from '../UI/Card';
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
