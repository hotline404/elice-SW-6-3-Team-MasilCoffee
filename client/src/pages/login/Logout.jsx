import React from "react";
import Title from "../../components/ui/title/Title.jsx";
import Container from "../../components/ui/container/Container.jsx";
import Card from "../../components/ui/card/Card.jsx";
import Button from "../../components/ui/button/SquareButton.jsx";
import { ROUTES } from "../../router/Routes.jsx";

import { useNavigate } from "react-router-dom";
import Contents from "../../components/ui/contents/Contents.jsx";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../redux/action/login/loginAction.jsx";

function Logout() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");

    dispatch(actionLogout());

    nav(ROUTES.MAIN.path);
  };

  return (
    <div>
      <Container>
        <Title>정말 로그아웃 하시겠습니까?</Title>
        <Card>
          <Contents>
            <Button type="red" onClick={handleLogout} text="로그아웃" />
          </Contents>
        </Card>
      </Container>
    </div>
  );
}

export default Logout;
