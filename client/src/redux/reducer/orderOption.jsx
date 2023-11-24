import { OPTION_TYPE } from "../action/_types";

const initialState = {
  options: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case OPTION_TYPE.GET_ALL_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    case OPTION_TYPE.GET_OPTION:
      const foundOption = state.options.find((option) => option.id === action.payload);
      return foundOption ? foundOption : null;
    case OPTION_TYPE.ADD_OPTION:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case OPTION_TYPE.UPDATE_OPTION:
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product) => {
        return product.id === updatedProduct.id ? updatedProduct : product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    case OPTION_TYPE.DELETE_OPTION:
      const deletedProductId = action.payload;
      const filteredProducts = state.products.filter((product) => product.id !== deletedProductId);

      return {
        ...state,
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export default product;
