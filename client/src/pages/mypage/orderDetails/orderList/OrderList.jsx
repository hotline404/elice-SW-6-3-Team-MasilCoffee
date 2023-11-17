import React from "react";
import *as S from "../OrderDetails.style"

function OrderList({ orders }) {
  return (
    <S.ListBox>
      {orders.map((order) => {
        return (
          <S.orderUL>
          <S.orderLI>  
            <div>
              <S.OrderDate>{order.date}</S.OrderDate>
              <S.OrderNum>주문번호: {order.orderNumber}</S.OrderNum>
              <S.PackingOption>
                포장 옵션: {order.isPacking ? "전체포장" : "매장식사"}
              </S.PackingOption>
              <span>
                <S.BtnOrderCancel>주문취소</S.BtnOrderCancel>
              </span>
            </div>
            <div>
              {order.items.map((item) => {
                return (
                  <ul>
                    <S.itemUL>
                      <S.ItemName>{item.name}</S.ItemName>
                      <S.ItemOption>{item.isIce ? "ICED" : "HOT"} |</S.ItemOption>
                      <S.ItemOption>{item.cup_size} |</S.ItemOption>
                      <S.ItemOption>시럽: {item.syrup}</S.ItemOption>
                    </S.itemUL>
                  </ul>
                );
              })}
            </div>
          </S.orderLI>
          </S.orderUL>
        );
      })}
    </S.ListBox>
  );
}

export default OrderList;




OrderList.defaultProps = {
  orders: [
    {
      date: "2023.11.16",
      orderNumber: 12045533,
      isPacking: true,
      items: [
        {
          name: "아이스 아메리카노",
          id: 1234,
          isIce: true,
          cup_size: "Tall",
          syrup: "바닐라 시럽 1",
        },

        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },
        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },
        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },
        {
          name: "샤케라또",
          id: 2999,
          isIce: true,
          cup_size: "Large",
          syrup: "none",
        },

      ],
    },

    {
      date: "2023.11.17",
      orderNumber: 12344513,
      isPacking: false,
      items: [
        {
          name: "샤케라또",
          id: 2999,
          isIce: false,
          cup_size: "Small",
          syrup: "none",
        },
      ],
    },
    {
      date: "2023.11.17",
      orderNumber: 12344513,
      isPacking: false,
      items: [
        {
          name: "샤케라또",
          id: 2999,
          isIce: false,
          cup_size: "Small",
          syrup: "none",
        },
      ],
    },
    {
      date: "2023.11.17",
      orderNumber: 12344513,
      isPacking: false,
      items: [
        {
          name: "샤케라또",
          id: 2999,
          isIce: false,
          cup_size: "Small",
          syrup: "none",
        },
      ],
    },
  ],
};
