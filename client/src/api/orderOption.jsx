import axios from "axios";

export const getAllOptions = async (token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.get("http://localhost:5000/api/v1/orderOption", headers);
  const options = res.data.data[0];
  return options;
};

export const createOption = async (data) => {
  const res = await axios.post("http://localhost:5000/api/v1/orderOption", data);
  const newOption = res.data.data;
  return newOption;
};

export const updateOption = async (id, data, token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.put(`http://localhost:5000/api/v1/orderOption/${id}`, data, headers);
  const option = res.data.data;
  return option;
};

export const deleteOption = async (id) => {
  const res = await axios.delete(`http://localhost:5000/api/v1/orderOption/${id}`);
  const options = res.data.data;
  console.log("deleted", res, options);
  return options;
};
