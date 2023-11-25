import axios from "axios";
const BASE_URL = {
  USER: {
    url : "http://localhost:5000/api/v1/users"
  },
  ADMIN: {
    url : "http://localhost:5000/api/v1/users/admin"
  }
}


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
    const res = await axios.post(`${BASE_URL.USER.url}/signup`, registerBody);
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
    const res = await axios.post(`${BASE_URL.USER.url}/signup/send-mail`, authBody);
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
    const res = await axios.post(`${BASE_URL.USER.url}/signup/verify-code`, authBody);
    const data = res.data;

    return data;
  } catch (error) {
    // 에러가 발생한 경우 에러 메시지를 콘솔에 출력
    console.error("Error:", error);
  }
};

//delete user

export const deleteUser = async (token) => {
  const headers = {
    "Authorization": `Bearer ${token}`
  }

  try {
    const res = await axios.delete(`${base.USER.url}`, headers);
    const data = res.data;

    return data
  } catch (err) {
    console.error("회원탈퇴 에러:", err);
  }
}

//delete admin

export const deleteAdmin = async (token, userId) => {
  const headers = {
    "Authorization": `Bearer ${token}`
  } 

  try {
    const res = await axios.delete(`${BASE_URL.ADMIN.url}/${userId}`, headers);
    const data = res.data;

    return data
  } catch (err) {
    console.error("관리자 탈퇴:", err)
  }
}
