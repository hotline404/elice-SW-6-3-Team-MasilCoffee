import React, { useRef } from "react";
import { InputCard } from "../../UI/InputCard";
import Input from "../../UI/Input";
import Contents from "../../UI/Contents";
import Card from "../../UI/Card";
import { InputBox } from "../../confirmPassword/ConfirmPassword.style";

import { InputBoxColumn } from "../UserInfoChange.style";
import { BtnConfirm } from "../../UI/BtnConfirm";
import { ButtonBox } from "../../UI/ButtonBox";

import styled from "styled-components";

function UserInfoForm() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const birthRef = useRef(null);
  const phoneRef = useRef(null);

  return (
    <div>
      <Contents>
        <Card>
          <InputCard>
            <h3>회원 정보</h3>
            <InputBox>
              <Input
                ref={emailRef}
                input={{
                  name: "이메일",
                  type: "email",
                  id: "change_email",
                  placeholder: "변경할 이메일을 입력해주세요.",
                }}
              />
            </InputBox>
            <InputBoxColumn>
              <Input
                ref={nameRef}
                input={{
                  name: "이름",
                  type: "text",
                  id: "change_name",
                  placeholder: "변경할 이름을 입력해주세요.",
                }}
              />
              <Input
                ref={birthRef}
                input={{
                  name: "생년월일",
                  type: "date",
                  id: "change_birth",
                  placeholder: "변경할 생년월일을 입력해주세요.",
                }}
              />
              <Input
                ref={phoneRef}
                input={{
                  name: "전화번호",
                  type: "tel",
                  id: "change_tel",
                  placeholder: "변경할 전화번호을 입력해주세요.",
                }}
              />
            </InputBoxColumn>
            <ButtonBox>
              <DeleteBtn>회원탈퇴</DeleteBtn>
              <BtnConfirm>회원정보 변경</BtnConfirm>
            </ButtonBox>
          </InputCard>
        </Card>
      </Contents>
    </div>
  );
}

export default UserInfoForm;

//임시 회원삭제 컴포넌트 styled

const DeleteBtn = styled.button`
  width: 123px;
  height: 42px;

  border-radius: 20px;
  background: #D9D9D9;
  color: #8e0e28;

  margin: 4px;

  border: none;
`;

