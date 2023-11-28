import React, { useState } from "react";
import * as Orders from "./style/OrderDetail.style";
import OrderCancel from "./OrderCancel";
import DateFormat from "../../../../util/DateFormat/DateFormat";

const OrderReceipt = ({ data }) => {
  const { date, nickname, request, totalPrice, packagingOption, orderDetail } = data;

  const ORDER_STATUS = {
    pending: "pending",
    accepted: "accepted",
    completed: "completed",
  };

  const [orderStatus, setOrderStatus] = useState(ORDER_STATUS.pending);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleAccept = () => {
    if (orderStatus === ORDER_STATUS.pending) {
      setOrderStatus(ORDER_STATUS.accepted);
    } else if (orderStatus === ORDER_STATUS.accepted) {
      setOrderStatus(ORDER_STATUS.completed);
    }
  };

  return (
    <Orders.Container>
      <Orders.TopBox>
        <Orders.Date>{DateFormat("date", date)}</Orders.Date>
        <Orders.Time>{DateFormat("time", date)}</Orders.Time>
        <Orders.Orderer>주문자 : {nickname}</Orders.Orderer>
        <Orders.Request>요청사항 : {request}</Orders.Request>
      </Orders.TopBox>
      <Orders.Wrapper>
        <Orders.LeftBox>
          <Orders.TotalPrice>
            [메뉴 {orderDetail.length}개] {totalPrice}원
          </Orders.TotalPrice>
          <Orders.Takeout>포장 옵션 : {packagingOption}</Orders.Takeout>
        </Orders.LeftBox>
        <Orders.CenterBox>
          {orderDetail.map((item, i) => {
            return (
              <Orders.ItemBox>
                <Orders.Item>{item.name} 1개</Orders.Item>
                <Orders.ItemOption>{item.options}</Orders.ItemOption>
              </Orders.ItemBox>
            );
          })}
        </Orders.CenterBox>
        <Orders.RightBox>
          {showCancelModal && (
            <OrderCancel
              closeModal={() => {
                setShowCancelModal(!showCancelModal);
              }}
            />
          )}
          <Orders.CancelButton
            onClick={() => {
              setShowCancelModal(!showCancelModal);
            }}
          >
            취소하기
          </Orders.CancelButton>
          <Orders.AcceptButton onClick={handleAccept} className={orderStatus === ORDER_STATUS.accepted ? "accepted" : "not-accepted"}>
            {orderStatus === ORDER_STATUS.accepted ? "완료처리하기" : "접수하기"}
          </Orders.AcceptButton>
        </Orders.RightBox>
      </Orders.Wrapper>
    </Orders.Container>
  );
};

// OrderReceipt.defaultProps = {
//   date: "2023.11.12",
//   time: "13:22",
//   orderer: "홍길동",
//   request: "물티슈도 챙겨주세요",
//   menuCount: 1,
//   totalPrice: "10,800",
//   takeout: "전체포장",
//   items: [
//     {
//       name: "아이스 아메리카노",
//       count: 1,
//       option: "샷1, 얼음많이, 휘핑 많이",
//     },
//     {
//       name: "아이스 돌체 라떼",
//       count: 1,
//       option: "샷 1, 얼음많이, 휘핑 많이, 돌체 시럽 1, 드리즐: 초코",
//     },
//   ],
// };

export default OrderReceipt;
