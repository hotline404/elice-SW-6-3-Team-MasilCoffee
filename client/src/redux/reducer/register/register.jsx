const initRegisterState = {
  email: ""
};


const user = (state = initRegisterState, action) => {
  switch (action.type) {

    case "get.auth.email": {
      const {email} = action.payload;

      return {
        ...state,
        email: email,
      };
    }

    default:
      return state;
  }
};

export default user;
