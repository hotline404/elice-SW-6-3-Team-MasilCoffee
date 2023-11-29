import { PAYMENT_TYPE } from "../action/_types";

const initialState = {
  orders: [], //주문이 쌓이는 곳
  orderRequest: "",
  deliveryMethod: "방문포장",
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_TYPE.PAYMENT:
      if (Array.isArray(action.payload)) {
        return { ...state, orders: [...action.payload] };
      }
      return { ...state, orders: [action.payload] };
    case PAYMENT_TYPE.ADD_REQUEST_DELIVERY:
      return {
        ...state,
        orderRequest: action.payload.orderRequest,
        deliveryMethod: action.payload.deliveryMethod,
      };
    case PAYMENT_TYPE.RESET:
      return initialState;
    default:
      return state;
  }
};

export default payment;
