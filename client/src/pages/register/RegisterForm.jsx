import React, { useRef } from "react";
import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";

import { ButtonBox, InputBox } from "./Register.style.jsx";

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
  },
  {
    name: "닉네임",
    type: "text",
    id: "nkname",
    placeholder: "닉네임을 입력해주세요",
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
    id: "password",
    placeholder: "비밀번호 확인을 위해 한번 더 비밀번호를 입력해주세요",
  },
];

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email:", emailRef.current.value);
    console.log("password:", passwordRef.current.value);
  };

  return (
    <Contents>
      <form onSubmit={handleSubmit}>
        {InputInfo.map((info) => {
          return (
            <InputBox>
              <Input
                ref={emailRef}
                input={{
                  name: info.name,
                  type: info.type,
                  id: info.id,
                  placeholder: info.placeholder,
                }}
              />
            </InputBox>
          );
        })}
        <ButtonBox>
          <Button type="red" text="회원가입" />
        </ButtonBox>
      </form>
    </Contents>
  );
}

export default LoginForm;

// ref: password,
// name: "비밀번호",
// type: "password",
// id: "passwordIsValid",
// placeholder: "비밀번호를 입력하세요",
