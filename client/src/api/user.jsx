import axios from "axios";
const url = "http://localhost:5000/api/v1/users";

export const axiosGetUsers = async () => {
  const res = await axios.get(url);  
  const data = res.data;


  console.log("userData:", data);
};

export const axiosPostUser = async (updateUser) => {
  const res = await axios.post(url, updateUser);

  const data = res.data;

  console.log("Updata User:", data)
};