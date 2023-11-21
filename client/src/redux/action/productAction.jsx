import { PRODUCT_TYPE } from "./_types";

export const actionGetAllProducts = (products) => {
  return {
    type: PRODUCT_TYPE.GET_ALL_PRODUCTS,
    payload: products,
  };
};

export const actionCreateProduct = (newProduct) => {
  return {
    type: PRODUCT_TYPE.ADD_PRODUCT,
    payload: newProduct,
  };
};
