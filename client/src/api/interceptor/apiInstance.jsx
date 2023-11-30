import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL_LOCAL,
});

apiInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const apiInstanceForm = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL_LOCAL,
  headers: { "Content-Type": "multipart/form-data" },
});

apiInstanceForm.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export { apiInstance, apiInstanceForm };
