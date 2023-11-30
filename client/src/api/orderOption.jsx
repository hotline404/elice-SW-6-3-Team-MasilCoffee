import { apiInstance } from "./interceptor/apiInstance";

export const getAllOptions = async () => {
  try {
    const res = await apiInstance.get("/orderOption");
    if (res?.data?.data[0]) {
      return res.data.data[0];
    }
  } catch (err) {
    console.log("getAllOptions-err", err);
  }
};

export const createOption = async (data) => {
  try {
    const res = await apiInstance.post("/orderOption", data);
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("createOption-err", err);
  }
};

export const updateOption = async (id, data) => {
  try {
    const res = await apiInstance.put(`/orderOption/${id}`, data);
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("updateOption-err", err);
  }
};

export const deleteOption = async (id) => {
  try {
    const res = await apiInstance.delete(`/orderOption/${id}`);
    if (res?.data?.data) {
      return res.data.data;
    }
  } catch (err) {
    console.log("deleteOption-err", err);
  }
};
