import React, { Fragment } from "react";
import Title from "../UI/Title";
import Container from "../UI/Container";

import UserInfoView from "./userinfo/UserInfoView";

function UserInfoChange() {
  return (
    <Fragment>
      <Container>
        <Title>정보변경</Title>
        <UserInfoView />
      </Container>
    </Fragment>
  );
}

export default UserInfoChange;
