import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import OrderList from "./OrderList";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledPaymentBox,
  StyledInfoBox,
  StyledOrderList,
  StyledAmountPayment,
  StyledInfoContainer,
  StyledCheck,
} from "./Cart.style";

import { useDispatch, useSelector } from "react-redux";
import * as orderOptionAction from "../../redux/action/orderOptionAction";
import { addOrder, removeOrder } from "../../redux/action/orderAction";
import { paymentAction } from "../../redux/action/paymentAction";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);
  const [orderList, setOrderList] = useState([]);
  // 각 주문에 대한 체크 상태를 관리하는 로컬 상태
  const [checkedStates, setCheckedStates] = useState({});

  const handleOnCheck = (e) => {
    if (e.target.checked) {
      const newCheckedStates = orders.reduce((acc, order) => {
        acc[order.id] = true;
        return acc;
      }, {});
      setCheckedStates(newCheckedStates);
      setOrderList(orders);
    } else {
      setCheckedStates({});
      setOrderList([]);
    }
  };

  const handleOnSelect = (order) => {
    const updatedCheckedStates = {
      ...checkedStates,
      [order.id]: !checkedStates[order.id],
    };
    setCheckedStates(updatedCheckedStates);

    if (updatedCheckedStates[order.id]) {
      setOrderList((orders) => [...orders, order]);
    } else {
      setOrderList((orders) => orders.filter((o) => o.id !== order.id));
    }
  };

  const handleOnClickToRemove = () => {
    if(window.confirm("삭제하시겠습니까?")) {
      orderList.forEach(order => dispatch(removeOrder(order.id)))
    }
  }

  useEffect(() => {
    // 주문 목록이 변경될 때마다 checkedStates 초기화
    const initialCheckedStates = orders.reduce((acc, order) => {
      acc[order.id] = false;
      return acc;
    }, {});
    setCheckedStates(initialCheckedStates);
  }, [orders]);

  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <h1>장바구니</h1>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <StyledOrderList>
                <StyledCheck>
                  <div>
                    <input onClick={handleOnCheck} type="checkbox" />
                    <h2>전체선택</h2>
                  </div>
                  <Button onClick={() => handleOnClickToRemove()} text={"선택삭제"} type={"grey"} />
                </StyledCheck>
                <i></i>
                <OrderList
                  handleOnSelect={handleOnSelect}
                  checkedStates={checkedStates}
                />
              </StyledOrderList>
              <StyledAmountPayment>
                <div>
                  <h2>총 결제 금액</h2>
                  <h2>
                    {orders.length > 0
                      ? orders
                          .reduce((acc, order) => acc + order.totalPrice, 0)
                          .toLocaleString()
                      : 0}
                    원
                  </h2>
                  <Button
                    onClick={() => {
                      navigate("/Order");
                    }}
                    text={"메뉴추가"}
                    type={"grey"}
                  />
                  <Button
                    onClick={() => {
                      dispatch(paymentAction(orderList));
                      navigate("/Payment");
                    }}
                    text={"주문하기"}
                    type={"red"}
                  />
                </div>
              </StyledAmountPayment>
            </StyledInfoBox>
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default Cart;
