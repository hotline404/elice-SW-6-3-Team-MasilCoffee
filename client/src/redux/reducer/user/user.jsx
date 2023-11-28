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

const nonData = "";

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
        user_id: userData._id,
      };
    }

    case "post.user.name": {
      const { name } = action.payload;

      return {
        ...state,
        name: name,
      };
    }

    case "post.user.nickname": {
      const { nickname } = action.payload;

      return {
        ...state,
        nickname: nickname,
      };
    }

    case "post.user.phone": {
      const { phone } = action.payload;

      return {
        ...state,
        phone: phone,
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
        user_id: nonData,
      };
    }

    default:
      return state;
  }
};

export default user;
