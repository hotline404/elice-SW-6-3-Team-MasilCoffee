import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/products");
    return res.data.data.data;
  } catch (err) {
    console.log("getAllProduct-err", err);
  }
};

export const getAllProductsMain = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/v1/products/main");
    return res.data.data;
  } catch (err) {
    console.log("getAllProduct-err", err);
  }
};

export const getCategoryProducts = async (category) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/products/categories/${category}`);
    console.log("categoryData", res.data.data);
    return res.data.data;
  } catch (err) {
    console.log("getAllProduct-err", err);
  }
};

export const createProduct = async (data, token) => {
  try {
    const res = await axios.post("http://localhost:5000/api/v1/products/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const newProducts = res.data.data;
    console.log("newProducts", newProducts);
    return newProducts;
  } catch (err) {
    console.log("createProduct-err", err);
  }
};

export const updateProduct = async (id, data, token) => {
  try {
    console.log("id", id);
    const res = await axios.put(`http://localhost:5000/api/v1/products/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    const products = res.data.data;

    return products;
  } catch (err) {
    console.log("updateProduct-err", err);
  }
};

export const deleteProduct = async (id, token) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log("deleteProduct-err", err);
  }
};
