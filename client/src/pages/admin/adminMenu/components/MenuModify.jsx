import React from "react";
import styled from "styled-components";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";

const MenuModify = () => {
  const size = ["tall", "large"];
  const temp = ["Ice", "Hot"];

  return (
    <ModalBackground>
      <ModalBox>
        <Title>
          <p>메뉴 수정</p>
          <TiDelete className="cancelIcon" />
        </Title>
        <form action="">
          이름 : <input type="text" name="name" required />
          종류 : <input type="text" name="category" required />
          가격 : <input type="text" name="price" required />
          사이즈 : <MenuSelect option={size} />
          ICE/HOT : <MenuSelect option={temp} />
          1회 제공량 : <input type="text" name="kcal" required />
          상세 설명 : <textarea name="description" cols="30" rows="5" />
          사진 추가 :
        </form>
      </ModalBox>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const ModalBox = styled.div`
  width: 39%;
  background-color: white;
  z-index: 100;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 25px;
  background-color: #8e0e28;

  & > p {
    font-size: 26px;
    color: white;
  }

  & > .cancelIcon {
    font-size: 50px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    & > div {
      margin-left: 32%;
      font-size: 20px;
    }
  }
`;

export default MenuModify;
