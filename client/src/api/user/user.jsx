import { apiInstance } from "../interceptor/apiInstance";
const urlAdmin = "/api/v1/users/admin";
const urluser = "/api/v1/users";
const urlToken = "/api/v1/users/check-login";

//common user
export const getAxiosUser = async () => {
  const res = await apiInstance.get(urluser);

  const user = res?.data?.data;

  return user;
};

export const patchAxiosUser = async (userInfo) => {
  const { nickname, phone, checkpassword } = userInfo;
  const body = {
    nickname: nickname,
    phone: phone,
    checkPassword: checkpassword,
  };

  const res = await apiInstance.patch(urluser, body);

  const newUser = res;

  return newUser;
};

export const patchAxiosUserRecipe = async (recipe) => {
  const body = {
    customRecipe: recipe,
  };

  const res = await apiInstance.patch(`${urluser}/userRecipe`, body);

  const newUser = res?.data?.data;
  return newUser;
};

export const delAxiosUser = async () => {
  const res = await apiInstance.delete(urluser);

  const delUser = res;

  return delUser;
};

//admin user
export const getAxiosAdmin = async (userId) => {
  const res = await apiInstance.get(`${urlAdmin}/${userId}`);

  const admin = res?.data?.data;

  return admin;
};

export const pathAxiosAdmin = async (
  userId,
  newName,
  newNickname,
  newPhone
) => {
  const body = { name: newName, nickname: newNickname, phone: newPhone };

  const res = await apiInstance.patch(`${urlAdmin}/${userId}`, body);

  const newAdim = res?.data?.data;

  return newAdim;
};

export const delAxiosAdmin = async (userId) => {
  const res = await apiInstance.delete(`${urlAdmin}/${userId}`);

  const delAdim = res?.data?.data;

  return delAdim;
};

//토큰 확인
export const getAxiosToken = async () => {
  try {
    const res = await apiInstance.get(urlToken);

    const user = res.data.isLoggedIn;
    console.log("user", user);

    return user;
  } catch (err) {
    console.error(err);
  }
};
