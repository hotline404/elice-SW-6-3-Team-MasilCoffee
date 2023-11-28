import { useState } from "react";
import SquareButton from "../../../components/ui/button/SquareButton";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../../redux/action/orderAction";

import {
  StyledOrderList,
  StyledOrderListMenu,
  StyledOrderListMenuBox,
  StyledAmountPayment,
  StyledOrderListMenuText,
  StyledOrderListMednuRequest,
} from "./OderList.style";

function OderList() {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment); // []
  const handleOnClickToUpdate = () => {
    if (window.confirm("나만의 꿀조합 넣기!")) {
      // 문제점 1. 꿀조합이 내가 지금까지 시켰던 모든 주문들이 보여지는 용도면 딱히 이쪽은 필요 없음
      // 문제점 2. 모든 주문들이 다 보여지면 꿀조합의 의미가 퇴색 됨 (내가 원하는 조합만 저장할 수 있어야 됨)
      alert("아직 그런 기능 없지롱~!")
    }
  };

  return (
    <>
      <StyledOrderList>
        <h2>주문내역</h2>
        <i></i>
        <StyledOrderListMenu>
          {payment.orders.length > 0 &&
            payment.orders.map((order) => (
              <>
                <StyledOrderListMenuBox>
                  <div>
                    <b>{order.name}</b>
                    <StyledOrderListMenuText>
                      {order.shot
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`샷 : ${item.name} ${item.quantity}`}</span>
                        ))}
                      {order.syrups
                        .filter((item) => item.quantity > 0)
                        .map((item) => (
                          <span
                            key={item.name}
                          >{`시럽 : ${item.name} ${item.quantity}`}</span>
                        ))}
                      {order.whipping
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`휘핑 : ${item.name}`}</span>
                        ))}
                      {order.ice
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`얼음 : ${item.name}`}</span>
                        ))}
                      {order.drizzle
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`드리즐 : ${item.name}`}</span>
                        ))}
                      {order.milk
                        .filter((item) => item.quantity > 0 && item.name !== "없음")
                        .map((item) => (
                          <span key={item.name}>{`우유 : ${item.name}`}</span>
                        ))}
                    </StyledOrderListMenuText>
                    {/* <StyledOrderListMenuText>
                      <span>{`샷 : ${order.shot}`}</span>
                      <span>{`시럽 : 바닐라 ${order.syrups.vanilla} 헤이즐넛 ${order.syrups.hazelnut} 카라멜  ${order.syrups.caramel} `}</span>
                    </StyledOrderListMenuText> */}
                    {/* <StyledOrderListMenuText>
                      <span>{`얼음 : ${order.ice}`}</span>
                      <span>{`휘핑 : ${order.whipping}`}</span>
                      <span>{`드리즐 : ${order.drizzle}`}</span>
                      <span>{`우유 : ${order.milk}`}</span>
                    </StyledOrderListMenuText> */}
                  </div>
                  <div>{order.quantity}개</div>
                  <div>{order.totalPrice}원</div>
                  <SquareButton
                    onClick={handleOnClickToUpdate}
                    text={"나만의 꿀조합"}
                    type={"red"}
                  />
                </StyledOrderListMenuBox>

                <StyledOrderListMenuBox>
                  <StyledOrderListMednuRequest>
                    주문 요청사항 : {payment.orderRequest}
                  </StyledOrderListMednuRequest>
                </StyledOrderListMenuBox>

                <StyledOrderListMenuBox>
                  <StyledOrderListMednuRequest>
                    수령방법 : {payment.deliveryMethod}
                  </StyledOrderListMednuRequest>
                </StyledOrderListMenuBox>
                <i></i>
              </>
            ))}
        </StyledOrderListMenu>
      </StyledOrderList>
      <StyledAmountPayment>
        <div>
          <h2>총 결제 금액</h2>
          <h2>
            {payment.orders.length > 0
              ? payment.orders
                  .reduce((acc, order) => acc + order.totalPrice, 0)
                  .toLocaleString()
              : 0}
            원
          </h2>
        </div>
        <i></i>
      </StyledAmountPayment>
    </>
  );
}

export default OderList;
