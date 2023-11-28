import { PAYMENT_TYPE } from "./_types";

export const paymentAction = (orders) => {
  return {
    type: PAYMENT_TYPE.PAYMENT,
    payload: orders,
  };
};
export const addRequestDeliveryAction = (orderRequest, deliveryMethod) => {
  return {
    type: PAYMENT_TYPE.ADD_REQUEST_DELIVERY,
    payload: {
      orderRequest,
      deliveryMethod,
    },
  };
};

// --------------mr전에 지워야함------------

export const actionGetAllOrders = (orders) => {
  return {
    type: PAYMENT_TYPE.GET_ALL_ORDERS,
    payload: orders,
  };
};

export const actionUpdateOrder = (order) => {
  return {
    type: PAYMENT_TYPE.UPDATE_ORDER,
    payload: order,
  };
};
