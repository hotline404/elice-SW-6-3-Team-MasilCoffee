import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAxiosLogin } from "../../api/login/login.jsx";
import { postLogin } from "../../redux/action/login/loginAction.jsx";
import { getAxiosUser } from "../../api/user/user.jsx";
import { getUser } from "../../redux/action/user/userAction.jsx";
import { ROUTES } from "../../router/Routes.jsx";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/button/Button.jsx";
import AlertModal from "../../components/ui/alert/AlertModal.jsx";
import { ButtonBox, InputBox, LoginMessage } from "./Login.style.jsx";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState(false);
  const [txt, setTxt] = useState("");

  /* 알림 창 함수화 기존 return안에 있던 상태 변경을 함수안에 넣어서 통합 */
  /* 불필요한 상태 업데이트 제거 */
  const showTemporaryAlert = (message, duration = 3000) => {
    setTxt(message);
    setAlert(true);
    setTimeout(() => setAlert(false), duration);
  };

  /*핸들 로그인으로 로그인 처리 로직 분리로 가독성 향상 및 유지보수 */
  const handleLogin = async (email, password) => {
    try {
      const loginResponse = await postAxiosLogin(email, password);
      dispatch(postLogin(loginResponse));

      showTemporaryAlert("로그인이 완료되었습니다.", 1000);
      setTimeout(() => navigate(ROUTES.MAIN.path, { replace: true }), 1000);

      const userResponse = await getAxiosUser();
      dispatch(getUser(userResponse));
    } catch (error) {
      console.error("로그인 에러", error);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    handleLogin(email, password);
  };

  return (
    <Fragment>
      {alert && <AlertModal>{txt}</AlertModal>}
      <form onSubmit={handleSubmit}>
        <LoginMessage>
          {visible ? "이메일과 비밀번호를 확인 해주세요." : ""}
        </LoginMessage>
        <InputBox>
          <Input
            ref={emailRef}
            input={{
              name: "이메일",
              type: "email",
              id: "emailIsValid",
              placeholder: "이메일을 입력하세요",
            }}
          />
        </InputBox>
        <InputBox>
          <Input
            ref={passwordRef}
            input={{
              name: "비밀번호",
              type: "password",
              id: "passwordIsValid",
              placeholder: "비밀번호를 입력하세요",
            }}
          />
        </InputBox>
        <ButtonBox>
          <Button Type="submit" type="red" text="로 그 인" />
          <Button
            Type="button"
            type="gray"
            text="회원가입"
            onClick={() => navigate(ROUTES.REGISTER.path)}
          />
        </ButtonBox>
      </form>
    </Fragment>
  );
}

export default LoginForm;
