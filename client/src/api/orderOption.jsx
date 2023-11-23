import axios from "axios";

export const getAllOptions = async () => {
  // api 경로 생기면 수정하기
  const res = await axios.get("http://localhost:5000/api/v1/option");
  const options = res.data.data;
  return options;
};

export const getOption = async (id) => {
  // api 경로 생기면 수정하기
  const res = await axios.get(`http://localhost:5000/api/v1/option/${id}`);
  const option = res.data.data;
  return option;
};

export const createOption = async (data) => {
  const res = await axios.post("http://localhost:5000/api/v1/option/", data);
  const newOption = res.data.data;
  return newOption;
};

export const updateOption = async (id, data) => {
  const res = await axios.put(`http://localhost:5000/api/v1/option/${id}`, data);
  const option = res.data.data;
  return option;
};

export const deleteOption = async (id) => {
  const res = await axios.delete(`http://localhost:5000/api/v1/option/${id}`);
  const options = res.data.data;
  console.log("deleted", res, options);
  return options;
};
