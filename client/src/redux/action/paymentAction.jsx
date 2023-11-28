import { PAYMENT_TYPE } from "./_types";

export const paymentAction = (orders) => {
  return {
    type: PAYMENT_TYPE.PAYMENT,
    payload: orders,
  };
};
export const addRequestDeliveryAction = (
  orderRequest,
  deliveryMethod
) => {
  return {
    type: PAYMENT_TYPE.ADD_REQUEST_DELIVERY,
    payload: {
      orderRequest,
      deliveryMethod,
    },
  };
};
