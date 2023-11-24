import axios from "axios";
const urlRegister = "http://localhost:5000/api/v1/users/signup";
const urlAuthEmail = "http://localhost:5000/api/v1/users/signup/send-mail"
const urlAuthNum = "http://localhost:5000/api/v1/users/signup/verify-code"

//register
export const axiosRegister = async (name, email, nickname, phone, password) => {
  const registerBody = {
    name: name,
    email: email,
    nickname: nickname,
    phone: phone,
    password: password,
  };

  try {
    const res = await axios.post(urlRegister, registerBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
//send-email
export const authEmail = async (email) => {
  const authBody = {
    "email": email,
  };

  try {
    const res = await axios.post(urlAuthEmail, authBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

//send-code
export const authComplete = async (email, code) => {
  const authBody = {
    "email": email,
    "code": parseInt(code)
  };

  console.log("code", code);
  console.log("code type", typeof(parseInt(code)))

  try {
    const res = await axios.post(urlAuthNum, authBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};
