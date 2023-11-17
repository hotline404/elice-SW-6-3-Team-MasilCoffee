import React, { Fragment } from "react";
import { InputCard } from "../UI/InputCard";
import Title from "../UI/Title";
import Container from "../UI/Container";
import Contents from "../UI/Contents";
import UserInfoForm from "./userinfo/UserInfoForm";

function UserInfoChange() {
  return (
    <Fragment>
      <Container>
        <Title>정보변경</Title>
        <UserInfoForm />
      </Container>
    </Fragment>
  );
}

export default UserInfoChange;
