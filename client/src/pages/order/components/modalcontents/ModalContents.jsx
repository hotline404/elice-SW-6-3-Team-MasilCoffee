import React, { useState, useEffect, useRef } from "react";
import Button from "../../../../components/ui/button/SquareButton";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setInitialOption } from "../../../../redux/action/orderDetailAction";
import { addOrder } from "../../../../redux/action/orderAction";
import { paymentAction } from "../../../../redux/action/paymentAction";

import {
  StyleText,
  StyleImg,
  StyleInfo,
  StyleDisplay,
  StylePaddingSpan,
  StyleQuantity,
  StyleButton,
  StyledTotalPrice,
} from "./ModalContents.style";

import QuantityOption from "./components/QuantityOption";
import SelectOption from "./components/SelectOption";

import ShotOptionSlide from "./components/ShotOptionSlide";
import SyrupOptionSlide from "./components/SyrupOptionSlide";
import IceOptionSlide from "./components/IceOptionSlide";
import WhippingOptionSlide from "./components/Whipping";
import DrizzleOptionSlide from "./components/Drizzle";

import MilkOptionSlide from "./components/MilkOptionSlide";

const ModalContents = ({ data }) => {
  const navigate = useNavigate();
  // 리덕스 가져오기
  const dispatch = useDispatch();
  const options = useSelector((state) => state.orderDetail);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(data.price);
  const resultOrder = useRef();
  // const [price, setPrice] = useState(data.price);

  const handleIncreaseOnClick = () => {
    setQuantity((old) => old + 1);
  };
  const handleDecreaseOnClick = () => {
    if (quantity > 1) {
      setQuantity((old) => old - 1);
    }
  };

  const handleSetResultOrder = (route, action) => {
    dispatch(action({ ...options.selectedOptions, orderId: new Date(), name: data.name, id: data.id, totalPrice }));
    navigate(route);
  }

  // const handleChangeOption = (optionName, selectedItem) => {
  //   dispatch(orderDetailAction.modifyOption({ name: optionName, value: selectedItem }));
  // };

  // const handleIncreaseOption = (optionName, itemName) => {
  //   dispatch(orderDetailAction.increaseOption(optionName, itemName));
  // };

  // const handleDecreaseOption = (optionName, itemName) => {
  //   dispatch(orderDetailAction.decreaseOption(optionName, itemName));
  // };

  useEffect(() => {
    dispatch(setInitialOption());

    // 모달 콘텐츠가 닫힐 때 실행되는 함수(클리어펑션)
    return () => dispatch(setInitialOption());
  }, []);

  // 임시 totalPrice 계산 함수
  useEffect(() => {
    let resultPrice = 0;

    for(const optionName in options.selectedOptions) {
      for(const detail of options.selectedOptions[optionName]) {
        const originPrice = options.orderDetail[optionName].find(item => item.name === detail.name).price;
        resultPrice += (originPrice * detail.quantity);
      }
    }

    setTotalPrice(resultPrice * quantity);
  }, [options, quantity]);

  return (
    <>
      <StyleText>
        <StyleImg></StyleImg>
        <StyleInfo>
          <span>{data.name}</span>
          <StylePaddingSpan>{quantity * data.price}</StylePaddingSpan>
          <StyleQuantity>
            <button onClick={handleIncreaseOnClick}>+</button>
            <span>{quantity}</span>
            <button onClick={handleDecreaseOnClick}>-</button>
          </StyleQuantity>
          <StyleDisplay>
            <span>{data.temp}</span>
            <span>{data.size}</span>
          </StyleDisplay>
        </StyleInfo>
      </StyleText>
      {/* <ShotOptionSlide />
      <SyrupOptionSlide />
      <IceOptionSlide />
      <WhippingOptionSlide />
      <DrizzleOptionSlide />
      <MilkOptionSlide /> */}
      {Object.keys(options.orderDetail).length > 0 && Object.keys(options.orderDetail).map(optionName => {
        if(optionName === "shot" || optionName === "syrups") {
          return (<QuantityOption key={optionName} optionName={optionName}/>)
        } else {
          return (<SelectOption key={optionName} optionName={optionName}/>)
        }
      })}
      <StyledTotalPrice>
        <b>총가격 : {totalPrice}원 </b>
      </StyledTotalPrice>

      <StyleButton>
        <Button
          onClick={() => handleSetResultOrder("/Cart", addOrder)}
          type="grey"
          text={"장바구니"}
        />
        <Button
          onClick={() => handleSetResultOrder("/Payment", paymentAction)}
          type="red"
          text={"결제하기"}
        />
      </StyleButton>
    </>
  );
};
export default ModalContents;
