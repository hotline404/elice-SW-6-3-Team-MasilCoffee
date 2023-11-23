import axios from "axios";
const urladmin = "http://localhost:5000/api/v1/users/admin";

export const axiosGetUsers = async (token) => {

  const res = await axios.get(urladmin, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const users = res.data.data;

  return users
};

export const axiosPostUser = async (updateUser) => {
  const res = await axios.post(urladmin, updateUser);

  const data = res.data;

  console.log("Updata User:", data)
};
