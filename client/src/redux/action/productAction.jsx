import axios from "axios";
import { PRODUCT_TYPE } from "./_types";

export const getAllProducts = () => {
  const data = axios.get("http://localhost:5000/api/v1/products").then((res) => res.data);
  const products = data.data;

  console.log("allPro", data, products);

  return {
    type: PRODUCT_TYPE.GET_ALL_PRODUCTS,
    payload: products,
  };
};

export const createProduct = (formData) => {
  const data = axios.post("http://localhost:5000/api/v1/products", formData).then((res) => res.data);
  const newProduct = data.data;

  console.log(data, newProduct);

  return {
    type: PRODUCT_TYPE.ADD_PRODUCT,
    payload: newProduct,
  };
};
