import axios from "axios";
const loginUrl = "http://localhost:5000/api/v1/users/login";
const logoutUrl = "http://localhost:5000/api/v1/users/logout";
const checkLogin = "http://localhost:5000/api/v1/users/check-login";

export const axiosPostLogin = async (email, password) => {
  const loginBody = { email: email, password: password };

  try {
    const res = await axios.post(loginUrl, loginBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const axiosPostLogout = async (token, userEmail) => {
  const logOutHeader = { headers: { Authorization: `Bearer ${token}` } };
  const body = {
    email: `${userEmail}`,
  };

  try {
    const res = await axios.post(logoutUrl, body, logOutHeader);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const getCheckLogin = async (token) => {
  const checkerHeaders = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const res = await axios.get(checkLogin, checkerHeaders);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
