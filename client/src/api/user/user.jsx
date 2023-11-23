import axios from "axios";


const urladminId = "http://localhost:5000/api/v1/users/admin/:userId"
const urluser = "http://localhost:5000/api/v1/users";


export const axiosGetUser = async (token) => {

  const res = await axios.get(urluser, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const user = res.data.data;

  return user
}

export const axiosGetAdmin = async (token) => {

  const res = await axios.get(urladminId, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const admin = res.data.data;

  return admin

};