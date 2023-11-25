import { PAYMENT_TYPE } from "../action/_types";

const initialState = []; //주문이 쌓이는 곳

const payment = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_TYPE.PAYMENT:
      return [...action.payload];
    case PAYMENT_TYPE.RESET:
      return initialState;
    default:
      return state;
  }
};

export default payment;
