import React, { useState, useEffect } from "react";
import Button from "../../../../components/ui/button/SquareButton";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as orderDetailAction from "../../../../redux/action/orderDetailAction";
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
} from "./ModalContents.style";

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
  // const [price, setPrice] = useState(data.price);

  const handleIncreaseOnClick = () => {
    dispatch(
      orderDetailAction.actionSetMenuOption({
        itemPrice: data.price,
        menu: options.menu + 1,
      })
    );
  };
  const handleDecreaseOnClick = () => {
    if (options.menu > 1) {
      dispatch(
        orderDetailAction.actionSetMenuOption({
          itemPrice: data.price,
          menu: options.menu - 1,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      orderDetailAction.actionSetMenuOption({
        itemPrice: data.price,
        menu: options.menu,
      })
    );
    console.log(data);
    console.log(options);

    // 모달 콘텐츠가 닫힐 때 실행되는 함수(클리어펑션)
    return () => dispatch(orderDetailAction.actionResetOption);
  }, []);

  return (
    <>
      <StyleText>
        <StyleImg></StyleImg>
        <StyleInfo>
          <span>{data.name}</span>
          <StylePaddingSpan>{options.menu * data.price}</StylePaddingSpan>
          <StyleQuantity>
            <button onClick={handleIncreaseOnClick}>+</button>
            <span>{options.menu}</span>
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
      <b>총가격 : {options.totalPrice}원 </b>
      <StyleButton>
        <Button
          onClick={() => {
            dispatch(addOrder({ ...options, id: new Date(), name: data.name }));
            navigate("/Cart");
          }}
          type="grey"
          text={"장바구니"}
        />
        <Button
          onClick={() => {
            dispatch(
              paymentAction([{ ...options, id: new Date(), name: data.name }])
            );
            navigate("/Payment");
          }}
          type="red"
          text={"결제하기"}
        />
      </StyleButton>
    </>
  );
};
export default ModalContents;
