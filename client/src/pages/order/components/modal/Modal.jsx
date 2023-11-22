import React, { useState } from "react";

import Button from "../../../../components/ui/button/Button";
import { Link } from "react-router-dom";

import {
  StyledModal,
  StyleModalContainer,
  StyleX,
  StyleText,
  StyleImg,
  StyleInfo,
  StyleDisplay,
  StylePaddingSpan,
  StyleQuantity,
  StyleButton,
  StyleXContainer,
} from "./Modal.style";

import ShotOptionSlide from "./components/ShotOptionSlide";
import SyrupOptionSlide from "./components/SyrupOptionSlide";
import IceOptionSlide from "./components/IceOptionSlide";
import WhippingOptionSlide from "./components/Whipping";
import DrizzleOptionSlide from "./components/Drizzle";

import MilkOptionSlide from "./components/MilkOptionSlide";

const Modal = ({ openModal, closeModal, data }) => {
  const [increase, setIncrease] = useState(1);
  const handleIncreaseOnClick = () => {
    setIncrease(increase + 1);
  };
  const handleDecreaseOnClick = () => {
    if (increase > 1) {
      setIncrease(increase - 1);
    }
  };
  const totalPrice = data.price * increase;

  return (
    <StyledModal>
      <StyleModalContainer>
        <StyleXContainer>
          <StyleX onClick={closeModal}>X</StyleX>
        </StyleXContainer>
        <StyleText>
          <StyleImg></StyleImg>
          <StyleInfo>
            <span>{data.name}</span>
            <StylePaddingSpan>{totalPrice}</StylePaddingSpan>
            <StyleQuantity>
              <button onClick={handleIncreaseOnClick}>+</button>
              <span>{increase}</span>
              <button onClick={handleDecreaseOnClick}>-</button>
            </StyleQuantity>
            <StyleDisplay>
              <span>{data.temp}</span>
              <span>{data.size}</span>
            </StyleDisplay>
          </StyleInfo>
        </StyleText>
        <ShotOptionSlide />
        <SyrupOptionSlide />
        <IceOptionSlide />
        <WhippingOptionSlide />
        <DrizzleOptionSlide />
        <MilkOptionSlide />
        <b>총가격 : </b>
        <StyleButton>
          <Link to="/Cart">
            <Button type="grey" text={"장바구니"} />
          </Link>
          <Link to="/Payment">
            <Button type="red" text={"결제하기"} />
          </Link>
        </StyleButton>
      </StyleModalContainer>
    </StyledModal>
  );
};
export default Modal;
