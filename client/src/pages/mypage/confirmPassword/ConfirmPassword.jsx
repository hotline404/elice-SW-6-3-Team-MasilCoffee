import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Container from "../../../components/ui/container/Container";
import Card from "../../../components/ui/card/Card";
import Title from "../../../components/ui/title/Title";
import ConfirmPasswordForm from "./ConfirmPasswordForm";
import AlertModal from "../../../components/ui/alert/AlertModal";
import { InputCard } from "../style/InputCard";
import { BtnConfirm } from "../style/BtnConfirm";
import { ButtonBox } from "../style/ButtonBox";

import { ROUTES } from "../../../router/Routes";
import { patchAxiosUser, delAxiosUser } from "../../../api/user/user";
import { postAxiosLogout } from "../../../api/login/login";
import { actionLogout } from "../../../redux/action/login/loginAction";
import { removeUser } from "../../../redux/action/user/userAction";

function ConfirmPassword() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.user);
  const { req: params } = useParams();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.LOGIN.path, { replace: true });
    }
  }, [token, navigate]);

  const showAlert = (message) => {
    setAlertText(message);
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  const handleLogout = async () => {
    try {
      await postAxiosLogout(email);
      dispatch(actionLogout());
      dispatch(removeUser());
      navigate(ROUTES.MAIN.path, { replace: true });
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (params === "post") {
        const userInfo = {
          nickname: user.nickname,
          phone: user.phone,
          checkpassword: password,
        };
        const res = await patchAxiosUser(userInfo);
        console.log("회원 정보 변경 완료:", res);
        showAlert("회원 정보 변경 완료!");
      } else if (params === "del") {
        const res = await delAxiosUser();
        console.log("회원 삭제 완료:", res);
        showAlert("회원 삭제 완료!");
      }
      await handleLogout();
    } catch (err) {
      console.error("에러 발생:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {alert && <AlertModal>{alertText}</AlertModal>}
      <Title>
        비밀번호 확인
        <p>회원가입 시 등록한 비밀번호를 입력해주세요.</p>
      </Title>
      <Card>
        <form onSubmit={handleSubmit}>
          <InputCard>
            <ConfirmPasswordForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <ButtonBox>
              <BtnConfirm disabled={isLoading}>
                {isLoading ? "처리 중..." : "확인"}
              </BtnConfirm>
            </ButtonBox>
          </InputCard>
        </form>
      </Card>
    </Container>
  );
}

ConfirmPassword.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
};

export default ConfirmPassword;
