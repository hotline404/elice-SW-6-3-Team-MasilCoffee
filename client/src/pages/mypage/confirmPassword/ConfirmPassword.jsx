import React, { Fragment, useRef, useState } from "react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import { InputCard } from "../UI/InputCard";
import Title from "../UI/Title";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import * as S from "./ConfirmPassword.style";
import { BtnConfirm } from "../UI/BtnConfirm";
import { CenterBox } from "../mypageComponent/MyPage.style";
import { ButtonBox } from "../UI/ButtonBox";

const dummy_userData = {
  accounts: [
    {
      email: "cosmoyj@naver.com",
      password: "asdf",
    },
    {
      email: "jj@naver.com",
      password: "asdf",
    },
    {
      email: "kk@naver.com",
      password: "asdf",
    },

    {
      email: "qq@naver.com",
      password: "asdf",
    },

    {
      email: "ee@naver.com",
      password: "asdf",
    },
  ],
};

function ConfirmPassword() {
  const nav = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const data = dummy_userData.accounts;

  console.log(emailRef);

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputEmail = emailRef.current ? emailRef.current.value : "";
    const inputPassword = passwordRef.current ? passwordRef.current.value : "";

    console.log(inputEmail);

    const isMatch = data.some(
      (account) =>
        account.email === inputEmail && account.password === inputPassword
    );

    if (!isMatch) {
      alert("이메일과 비밀번호를 확인해 주세요.");
    } else {
      nav("/UserInfoChange");
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
              <CenterBox>
                <S.InputBox>
                  <Input
                    ref={emailRef}
                    input={{
                      name: "이메일",
                      type: "email",
                      id: "emailIsVaild",
                      placeholder: "이메일을 입력하세요",
                    }}
                  />
                </S.InputBox>
                <S.InputBox>
                  <Input
                    ref={passwordRef}
                    input={{
                      name: "비밀번호",
                      type: "password",
                      id: "passwordIsVaild",
                      placeholder: "비밀번호를 입력하세요",
                    }}
                  />
                </S.InputBox>
              </CenterBox>
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
