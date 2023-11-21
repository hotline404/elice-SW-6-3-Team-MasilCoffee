import { PRODUCT_TYPE } from "../action/_types";

const initialState = {
  products: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPE.GET_ALL_PRODUCTS:
      console.log("reducer 데이터", action.payload.product);
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case PRODUCT_TYPE.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default product;
