import axios from "axios";

const urlAdmin = "http://localhost:5000/api/v1/users/admin";
const urluser = "http://localhost:5000/api/v1/users";

//common user

export const axiosGetUser = async (token) => {
  const res = await axios.get(urluser, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = res.data.data;

  return user;
};

export const axiosPatchUser = async (token, newNickname, newPhone) => {
  const headers = { Authorization: `Bearer ${token}` };
  const body = { nickname: newNickname, phone: newPhone };

  const res = await axios.patch(urluser, body, headers);

  const newUser = res.data.data;

  return newUser;
};

export const axiosDelUser = async (token) => {
  const headers = { Authorization: `Bearer ${token}` };

  const res = await axios.del(urluser, headers);

  const delUser = res.data.data;

  return delUser;
};

//admin user

export const axiosGetAdmin = async (token, userId) => {
  const headers = { Authorization: `Bearer ${token}` };

  const res = await axios.get(`${urlAdmin}/${userId}`, headers);

  const admin = res.data.data;

  return admin;
};

export const axiosPatchAdmin = async (token, userId, newName, newNickname, newPhone) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const body = { name: newName, nickname: newNickname, phone: newPhone };

  const res = await axios.patch(`${urlAdmin}/${userId}`, body, headers);

  const newAdim = res.data.data;

  return newAdim;
};

export const axiosDelAdmin = async (token, userId) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const res = await axios.delete(`${urlAdmin}/${userId}`, headers);

  const delAdim = res.data.data;

  return delAdim;
};
