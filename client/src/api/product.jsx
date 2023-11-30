import { apiInstance, apiInstanceForm } from "./interceptor/apiInstance";

export const getAllProducts = async () => {
  try {
    const res = await apiInstance.get("/products");
    if (res?.data?.data?.data) {
      return res.data.data.data;
    }
  } catch (err) {
    console.log("getAllProduct-err", err);
  }
};

export const getAllProductsMain = async () => {
  try {
    const res = await apiInstance.get("/products/main");
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("getAllProductsMain-err", err);
  }
};

export const getCategoryProducts = async (category) => {
  try {
    const res = await apiInstance.get(`/products/categories/${category}`);
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("getCategoryProducts-err", err);
  }
};

export const createProduct = async (data) => {
  try {
    const res = await apiInstanceForm.post("/products/", data);
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("createProduct-err", err);
  }
};

export const updateProduct = async (id, data) => {
  try {
    console.log("id", id);
    const res = await apiInstanceForm.put(`/products/${id}`, data);
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("updateProduct-err", err);
  }
};

export const deleteProduct = async (id) => {
  try {
    await apiInstance.delete(`/products/${id}`);
  } catch (err) {
    console.log("deleteProduct-err", err);
  }
};
