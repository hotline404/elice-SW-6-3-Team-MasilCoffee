import React from "react";
import Input from "../UI/Input";
import { CenterBox } from "../mypageComponent/MyPage.style";
import * as S from "./ConfirmPassword.style";


function ConfirmPasswordForm({emailRef, passwordRef}) {
  return (
    <div>
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
    </div>
  );
}

export default ConfirmPasswordForm;
