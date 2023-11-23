import React, { useRef, useState } from "react";

import { axiosRegister } from "../../api/register/axiosRegister.jsx";

import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";
import Title from "../../components/ui/title/Title.jsx";
import { ButtonBox, InputBox } from "./Register.style.jsx";
import AuthEmail from "./AuthEmail.jsx";

const InputInfo = [
  {
    name: "이름",
    type: "text",
    id: "name",
    placeholder: "이름을 입력해주세요",
  },
  {
    name: "이메일",
    type: "email",
    id: "email",
    placeholder: "이메일 형식을 지켜주세요(abcd@QQQ.com)",
    auth: true,
  },
  {
    name: "닉네임",
    type: "text",
    id: "nkname",
    placeholder: "닉네임을 입력해주세요",
    confirm_double: true
  },
  {
    name: "전화번호",
    type: "tel",
    id: "tel",
    placeholder: "전화번호를 입력해주세요",
  },
  {
    name: "비밀번호",
    type: "password",
    id: "password",
    placeholder: "비밀번호를 입력해주세요",
  },
  {
    name: "비밀번호 확인",
    type: "password",
    id: "passwordConfirm",
    placeholder: "비밀번호 확인을 위해 한번 더 비밀번호를 입력해주세요",
    doublecheck: true,
  },
];

function RegisterForm() {
  const [auth, setAuth] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClick = (id) => alert(`Double check clicked for ${id}`);

  const openAuthModal = () => {
    setAuth(true);
  };

  const closeAuthModal = () => {
    setAuth(false);
  }

  const fn = async () => {
    try {
      const registerRes = await axiosRegister();
      console.log(registerRes);
    } catch (err) {
      alert("아이디 비밀번호를 확인해 주세요");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fn();
  };

  return (
    <Contents>
      {auth && <AuthEmail onClose={closeAuthModal}/>}
      <Title>모두 입력 해주세요.</Title>
      <form onSubmit={handleSubmit}>
        {InputInfo.map((info) => (
          <InputBox key={info.id}>
            <Input
              ref={info.id === "email" ? emailRef : passwordRef}
              input={info}
            />
            {info.auth && <div onClick={openAuthModal}>인증</div>}
            {info.doublecheck && (
              <div onClick={() => handleClick(info.id)}>비밀번호 확인</div>
            )}
            {info.confirm_double && (
              <div onClick={() => handleClick(info.id)}>중복확인</div>
            )}
          </InputBox>
        ))}
        <ButtonBox>
          <Button type="red" text="회원가입" />
        </ButtonBox>
      </form>
    </Contents>
  );
}

export default RegisterForm;
