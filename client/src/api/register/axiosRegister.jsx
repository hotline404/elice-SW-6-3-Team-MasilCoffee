import axios from "axios";
const url = "http://localhost:5000/api/v1/users/signup";

export const axiosRegister = async (name, email, nickname, phone, password) => {
  const signupHeaders = {
    name: name,
    email: email,
    nickname: nickname,
    phone: phone,
    password: password,
  };

  try {
    const res = await axios.post(url, signupHeaders);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

export const authEmail = async (email) => {
  const signupHeaders = {
    "email": email,
  };

  try {
    const res = await axios.post(url, signupHeaders);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
