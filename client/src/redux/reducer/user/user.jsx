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

const user = (state = initUserState, action) => {
  switch (action.type) {
    case "get.user": {
      const { userData } = action.payload;
      return {
        ...state,
        birth: userData.birth,
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

    case "get.admin": {
      const { initData } = action.payload;
      return { ...state, users: initData };
    }

    case "get.admin": {
      const { initData } = action.payload;
      return { ...state, users: initData };
    }

    default:
      return state;
  }
};

export default user;
