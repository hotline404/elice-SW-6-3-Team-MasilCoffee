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
import { axiosPatchUser } from "../../../api/user/user";


function ConfirmPassword() {
  const nav = useNavigate();
  const token = useSelector(state => state.login.token);
  const user = useSelector(state => state.user)
  console.log("user", user)
  console.log("token", token)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const axiosFn = async (token, nickname, phone, checkpassword) => {
    try {
      const res = await axiosPatchUser(token, nickname, phone, checkpassword);
      alert(`닉네임: ${res.nickname} 전화번호: ${phone} 성공적으로 변경했습니다!`)
    } catch (err) {
      console.error(err)
    }
  }

  


  const handleSubmit = (event) => {
    event.preventDefault();
    const newNickname = user.nickname;
    const newPhone = user.phone;
    const inputPassword = passwordRef.current ? passwordRef.current.value : "";
    console.log("token",token)
    console.log("nick",newNickname)
    console.log("phone",newPhone)
    console.log("password",inputPassword)
    axiosFn(token, newNickname, newPhone, inputPassword);
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
