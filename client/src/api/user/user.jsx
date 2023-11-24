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


export const axiosPatchUser = async (token, newNickname, newPhone) => {

  const res = await axios.patch(urluser, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "nickname": newNickname,
      "phone": newPhone
    }
  })

  const newUser = res.data.data;

  return newUser
}

export const axiosDelUser = async (token) => {

  const res = await axios.del(urluser, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })

  const delUser = res.data.data;

  return delUser
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

export const axiosPatchAdmin = async (token, newName, newNickname, newPhone) => {

  const res = await axios.patch(urladminId, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "name": newName,
      "nickname": newNickname,
      "phone": newPhone
    }
  })

  const newAdim = res.data.data;

  return newAdim

};

export const axiosDelAdmin = async (token) => {

  const res = await axios.del(urladminId, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })

  const delAdim = res.data.data;

  return delAdim

};