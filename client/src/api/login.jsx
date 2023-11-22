import axios from "axios";
const url = "http://localhost:5000/api/v1/users";

export const axiosPostLogin = async (email, password) => {
  const loginIput = {
    email: email,
    password: password
  }

  const res = await axios.post(url, loginIput);
  const data = res.data;

  console.log("login:", data);

  return data;
}