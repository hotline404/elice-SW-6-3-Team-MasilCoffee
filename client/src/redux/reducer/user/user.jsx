const initUserState = {
  birth: "",
  create_at: "",
  email: "",
  name: "",
  nickname: "",
  password: "",
  phone: "",
  role: "",
  updated: "",
  user_id: "",
};

const nonData = ""

const user = (state = initUserState, action) => {
  switch (action.type) {
    case "get.user": {
      const { userData } = action.payload;

      console.log("get.user - 현재 상태:", state);
      console.log("get.user - 업데이트할 데이터:", userData);
      
      return {
        ...state,
        birth: `${userData.birth}`,
        create_at: userData.createAt,
        email: userData.email,
        name: userData.name,
        nickname: userData.nickname,
        password: userData.password,
        phone: userData.phone,
        role: userData.role,
        user_id: userData._id
      };
    }

    case "post.user": {
      const { updateUser } = action.payload;

      return {
        ...state,
        users: updateUser,
      };
    }

    case "remove.user": {
      return {
        ...state,
        birth: nonData,
        create_at: nonData,
        email: nonData,
        name: nonData,
        nickname: nonData,
        password: nonData,
        phone: nonData,
        role: nonData,
        user_id: nonData
      }
    }

    default:
      return state;
  }
};

export default user;
