import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터
apiInstance.interceptors.request.use(
  function (config) {
    // 1. 요청 전달되기 전 작업 처리
    // config를 설정할 수 있다

    config.headers["Authorization"] = `berear ${localStorage.getItem("token")}`;
    return config;
  },
  function (error) {
    // 2. 요청 에러가 있는 작업 처리
    return Promise.reject(error);
  }

  );
  export default apiInstance;