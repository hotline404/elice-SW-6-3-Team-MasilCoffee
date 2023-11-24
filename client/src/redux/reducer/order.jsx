import { ORDERS_TYPE } from "../action/_types";
import { calculatePrice } from "./orderOption";

const initialState = []; //주문이 쌓이는 곳

const order = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_TYPE.ADD_ORDER:
      return [...state, action.payload];
    case ORDERS_TYPE.REMOVE_ORDER: {
      const newState = state.filter((current) => current.id !== action.payload); // action.payload로 삭제할 주문의 인덱스를 받아야 됨
      return [...newState];
    }
    case ORDERS_TYPE.UPDATE_ORDER: {
      const newState = state.map((current) => {
        if(current.id === action.payload.id) {
          const copyOrder = JSON.parse(JSON.stringify(action.payload.order));
          const result = {...copyOrder, totalPrice: calculatePrice(copyOrder)};
          return result;
        }
        else return current;
      }
      );
      return [...newState];
    }
    default:
      return state;
  }
};
export default order;
