import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/products");
  const products = res.data.data;

  return products;
};

export const createProduct = async (formData) => {
  const res = await axios.post("http://localhost:5000/api/v1/products", formData).then((res) => res.data);
  const newProduct = res.data;

  console.log(res, newProduct);

  return newProduct;
};
