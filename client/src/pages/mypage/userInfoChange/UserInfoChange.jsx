import React, { Fragment } from "react";
import Title from "../../../components/ui/title/Title";
import Container from "../../../components/ui/container/Container";

import UserInfoView from "./userinfo/UserInfoView";
import Headers from "../../../components/layout/Header/Headers";
import Footer from "../../../components/layout/Footer/Footer";

function UserInfoChange() {
  return (
    <Fragment>
      <Headers />
      <Container>
        <Title>정보변경</Title>
        <UserInfoView />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default UserInfoChange;
