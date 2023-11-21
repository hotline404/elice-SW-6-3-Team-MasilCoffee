import { PRODUCT_TYPE } from "../action/_types";

const initialState = {
  products: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPE.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_TYPE.ADD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default product;
