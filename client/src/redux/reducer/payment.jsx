import { PAYMENT_TYPE } from "../action/_types";

const initialState = {
  orders: [], //주문이 쌓이는 곳
  orderRequest: "",
  deliveryMethod: "방문포장",
  receipted: [],
  completed: [],
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

    // --------------mr전에 지워야함------------
    case PAYMENT_TYPE.GET_ALL_ORDERS:
      const filteredReceipt = state.orders.filter((order) => order.status === "주문완료");
      const filteredComplete = state.orders.filter((order) => order.status !== "주문완료");
      return {
        orders: action.payload,
        receipted: filteredReceipt,
        completed: filteredComplete,
      };

    default:
      return state;
  }
};

export default payment;
