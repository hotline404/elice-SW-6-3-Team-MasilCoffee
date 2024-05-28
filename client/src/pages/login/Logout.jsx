import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Title from "../../components/ui/title/Title.jsx";
import Container from "../../components/ui/container/Container.jsx";
import Card from "../../components/ui/card/Card.jsx";
import Button from "../../components/ui/button/SquareButton.jsx";
import Contents from "../../components/ui/contents/Contents.jsx";

import { ROUTES } from "../../router/Routes.jsx";
import { postAxiosLogout } from "../../api/login/login.jsx";
import { actionLogout } from "../../redux/action/login/loginAction.jsx";
import { removeUser } from "../../redux/action/user/userAction.jsx";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email);

  const handleLogout = async () => {
    try {
      await postAxiosLogout(userEmail);

      localStorage.removeItem("token");
      dispatch(actionLogout());
      dispatch(removeUser());

      window.addEventListener("popstate", () => {
        window.history.pushState(null, null, ROUTES.MAIN.path);
      });

      navigate(ROUTES.MAIN.path, { replace: true });
    } catch (error) {
      console.error("로그아웃 폼 axios 에러:", error);
    }
  };

  return (
    <Container>
      <Title>정말 로그아웃 하시겠습니까?</Title>
      <Card>
        <Contents>
          <Button type="red" onClick={handleLogout} text="로그아웃" />
        </Contents>
      </Card>
    </Container>
  );
}

export default Logout;
