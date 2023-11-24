import axios from "axios";
const loginUrl = "http://localhost:5000/api/v1/users/login";
const logoutUrl = "http://localhost:5000/api/v1/users/logout";
const checkLogin = "http://localhost:5000/api/v1/users/check-login"

export const axiosPostLogin = async (email, password) => {
  const loginHeader = { "email": email, "password": password };
  

  try {
    const res = await axios.post(loginUrl, loginHeader);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const axiosPostLogout = async (token) => {
  const logOutHeader = { "Authorization": `Bearer ${token}` };
  

  try {
    const res = await axios.post(logoutUrl, logOutHeader);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const getCheckLogin = async (token) => {
  const checkerHeader = { "Authorization": `Bearer ${token}` };
  

  try {
    const res = await axios.get(checkLogin, checkerHeader);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
