import React from "react";
import * as Modal from "./Style_modal";
import MenuSelect from "./MenuSelect";
import { TiDelete } from "react-icons/ti";

const MenuModify = () => {
  const size = ["tall", "large"];
  const temp = ["Ice", "Hot"];

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>메뉴 수정</p>
          <TiDelete className="cancelIcon" />
        </Modal.Title>
        <Modal.Form action="">
          <Modal.P>
            <Modal.Label>이름 :</Modal.Label>
            <Modal.Input type="text" name="name" required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가격 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="text" name="price" required />
              <Modal.CurrencyText>원</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.P>
            <Modal.Label>종류 :</Modal.Label>
            <Modal.Input type="text" name="category" required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>사이즈 :</Modal.Label>
            <MenuSelect options={size} modal />
          </Modal.P>
          <Modal.P>
            <Modal.Label>ICE/HOT :</Modal.Label>
            <MenuSelect options={temp} modal />
          </Modal.P>
          <Modal.P>
            <Modal.Label>1회 제공량 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="text" name="kcal" required />
              <Modal.CurrencyText>kcal</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>
          <Modal.P>
            <Modal.Label>상세 설명 :</Modal.Label>
            <textarea name="description" cols="30" rows="3" />
          </Modal.P>
          <Modal.Label>사진 추가 :</Modal.Label>
        </Modal.Form>
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default MenuModify;
