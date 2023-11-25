import { ORDERS_TYPE } from "./_types";

// 주문한 정보를 장바구니 결제페이지로 보냄
// id값(메뉴) 모든 정보가 포함
export const addOrder = (order) => {
  return {
    type: ORDERS_TYPE.ADD_ORDER,
    payload: order,
  };
};
export const removeOrder = (orderId) => {
  return {
    type: ORDERS_TYPE.REMOVE_ORDER,
    payload: orderId,
  };
};
export const updateOrder = (updatedOrder, orderId) => {
  return {
    type: ORDERS_TYPE.UPDATE_ORDER,
    payload: {
      id: orderId,
      order: updatedOrder
    },
  };
};
