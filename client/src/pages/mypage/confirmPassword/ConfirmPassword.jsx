import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import Title from "../../../components/ui/title/Title";
import { InputCard } from "../style/InputCard";
import { BtnConfirm } from "../style/BtnConfirm";
import { ButtonBox } from "../style/ButtonBox";

import React, { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/Routes";
import { useSelector } from "react-redux"

import ConfirmPasswordForm from "./ConfirmPasswordForm";


function ConfirmPassword() {
  const nav = useNavigate();
  const token = useSelector(state => state.login.token);
  const user = useSelector(state => state.user)
  console.log("user", user)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const data = user;

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputEmail = emailRef.current ? emailRef.current.value : "";
    const inputPassword = passwordRef.current ? passwordRef.current.value : "";


    const isMatch = user.email === inputEmail && user.password === inputPassword


    if (!isMatch) {
      alert("이메일과 비밀번호를 확인해 주세요.");
    } else {
      nav(ROUTES.MAIN.path);
      alert("정보가 변경 되었습니다.")
    }
  };

  return (
    <Fragment>
      <Container>
        <Title>
          비밀번호 확인
          <p>회원가입 시 등록한 비밀번호를 입력해주세요.</p>
        </Title>
        <Card>
          <form onSubmit={handleSubmit}>
            <InputCard>
              <ConfirmPasswordForm email={emailRef} password={passwordRef} />
              <ButtonBox>
                <BtnConfirm>확인</BtnConfirm>
              </ButtonBox>
            </InputCard>
          </form>
        </Card>
      </Container>
    </Fragment>
  );
}

export default ConfirmPassword;
