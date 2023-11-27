import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { axiosRegister } from "../../api/register/axiosRegister.jsx";
import doubleCheck from "../../util/doubleCheck/doubleCheck.jsx";
import AuthEmail from "./AuthEmail.jsx";

import Contents from "../../components/ui/contents/Contents";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";
import Title from "../../components/ui/title/Title.jsx";
import { ButtonBox, InputBox, AuthButton } from "./Register.style.jsx";

const initRegisterInfo = {
  name: "",
  email: "",
  nickname: "",
  phone: "",
  password: "",
};

function RegisterForm(props) {
  const [auth, setAuth] = useState(false);
  const [regInfo, setRegInfo] = useState(initRegisterInfo);

  const authEmail = useSelector((state) => state.register.email);

  const firstPasswordRef = useRef();
  const secPasswordRef = useRef();

  useEffect(() => {
    setRegInfo((current) => {
      return {
        ...current,
        email: authEmail,
      };
    });
  }, [auth]);

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "name":
        {
          setRegInfo((current) => {
            return {
              ...current,
              name: e.target.value,
            };
          });
        }
        break;
      case "nkname":
        {
          setRegInfo((current) => {
            return {
              ...current,
              nickname: e.target.value,
            };
          });
        }
        break;
      case "tel":
        {
          setRegInfo((current) => {
            return {
              ...current,
              phone: e.target.value,
            };
          });
        }
        break;
      default:
        return;
    }
  };

  const doubleCheckhandler = () => {
    const isMatch = doubleCheck(
      firstPasswordRef.current.value,
      secPasswordRef.current.value
    );
    if (isMatch) {
      setRegInfo((current) => {
        return {
          ...current,
          password: secPasswordRef.current.value,
        };
      });
    } else {
      alert("비밀번호를 확인해주새엘몬");
      setRegInfo((current) => {
        return {
          ...current,
          password: "",
        };
      });
    }
  };

  const openAuthModal = () => {
    setAuth(true);
  };

  const closeAuthModal = () => {
    setAuth(false);
  };

  const fn = async (regInfo) => {
    try {
      const { name, email, nickname, password, phone } = regInfo;
      const registerRes = await axiosRegister(
        name,
        email,
        nickname,
        password,
        phone
      );
      alert(registerRes);
    } catch (err) {
      alert("다시 입력 해주세요");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fn(regInfo);
  };

  return (
    <Contents>
      {auth && <AuthEmail onClose={closeAuthModal} />}
      <Title>모두 입력 해주세요.</Title>
      <form onSubmit={handleSubmit}>
        <InputBox>
          <Input
            input={{
              name: "이메일",
              type: "email",
              id: "email",
              placeholder: "이메일 형식을 지켜주세요(abcd@QQQ.com)",
              value: `${regInfo.email}`,
              readonly: true,
            }}
          />
          <AuthButton onClick={openAuthModal}>인증</AuthButton>
        </InputBox>
        {props.input.map((info) => (
          <InputBox key={info.id}>
            <Input onChange={handleInputChange} input={info} />
          </InputBox>
        ))}
        <InputBox>
          <Input
            ref={firstPasswordRef}
            input={{
              name: "비밀번호",
              type: "password",
              id: "password",
              placeholder: "비밀번호를 입력해주세요",
            }}
          />
        </InputBox>
        <InputBox>
          <Input
            ref={secPasswordRef}
            input={{
              name: "비밀번호 확인",
              type: "password",
              id: "passwordConfirm",
              placeholder:
                "비밀번호 확인을 위해 한번 더 비밀번호를 입력해주세요",
              doublecheck: true,
            }}
          />
          <AuthButton onClick={doubleCheckhandler}>비밀번호 확인</AuthButton>
        </InputBox>
        <ButtonBox>
          <Button type="red" text="회원가입" />
        </ButtonBox>
      </form>
    </Contents>
  );
}

export default RegisterForm;
