import React, { useState } from "react";
import * as Modal from "./Style_modal";
import { TiDelete } from "react-icons/ti";

import axios from "axios";

const MenuModal = ({ title, closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    axios
      .post("http://localhost:5000/api/v1/products", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Modal.ModalBackground>
      <Modal.ModalBox>
        <Modal.Title>
          <p>{title}</p>
          <TiDelete className="cancelIcon" onClick={closeModal} />
        </Modal.Title>
        <Modal.Form onSubmit={handleSubmit}>
          <Modal.P>
            <Modal.Label>이름 :</Modal.Label>
            <Modal.Input type="text" name="name" required />
          </Modal.P>
          <Modal.P>
            <Modal.Label>가격 :</Modal.Label>
            <Modal.InputContainer>
              <Modal.Input type="number" name="price" required />
              <Modal.CurrencyText>원</Modal.CurrencyText>
            </Modal.InputContainer>
          </Modal.P>

          <Modal.Submit type="submit" onClick={handleSubmit}>
            제출하기
          </Modal.Submit>
        </Modal.Form>
      </Modal.ModalBox>
    </Modal.ModalBackground>
  );
};

export default MenuModal;
