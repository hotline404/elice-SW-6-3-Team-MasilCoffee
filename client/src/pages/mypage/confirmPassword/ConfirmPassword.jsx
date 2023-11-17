import React, { useRef, useState } from "react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import Contents from "../UI/Contents";
import Title from "../UI/Title";
import Input from "./confirmer.jsx/Input";
import { useNavigate } from "react-router-dom";

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
    <div>
      <Container>
        <Title>
          비밀번호 확인
          <p>회원가입 시 등록한 비밀번호를 입력해주세요.</p>
        </Title>
        <Card>
          <form onSubmit={handleSubmit}>
            <Contents>
              <Input
                ref={emailRef}
                input={{
                  type: "email",
                  id: "emailIsVaild",
                  placeholder: "이메일을 입력하세요",
                }}
              />
              <Input
                ref={passwordRef}
                input={{
                  type: "password",
                  id: "passwordIsVaild",
                  placeholder: "비밀번호를 입력하세요",
                }}
              />
            </Contents>
            <button>확인</button>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default ConfirmPassword;
