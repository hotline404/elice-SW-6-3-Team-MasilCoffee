import { PAYMENT_TYPE } from "./_types";

export const paymentAction = (orders) => {
  return {
    type: PAYMENT_TYPE.PAYMENT,
    payload: orders,
  };
}


