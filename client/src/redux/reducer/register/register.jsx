import doubleCheck from "../../../util/doubleCheck/doubleCheck";

const initRegisterState = {
  register_info: [],

  is_auth: false,
  is_doublepass: false,
};

//getUsers 방식으로 구조 ㄷrㅅl 짜기....만들어 둔 util(match, isValid) ㅅr용하ㄱl...
//ㄴr는 오늘도 code를 ZZㅏ고 있ㄷr....

const nonData = false;

const user = (state = initRegisterState, action) => {
  switch (action.type) {
    case "get.auth.email": {
      const isAuth = action.payload.email && true;

      return {
        ...state,
        is_auth: isAuth,
      };
    }

    case "check.pass": {
      const fir = action.payload.firstPass;
      const sec = action.payload.secPass;
      const isDouble = doubleCheck(fir, sec);

      return {
        ...state,
        is_doublepass: isDouble,
      };
    }

    case "get.register.info": {
      const registerInfo = action.payload.info;
      const isAuth = state.is_auth && true;
      const isDouble = state.is_doublepass && true;

      if (isAuth && isDouble) {
        return {
          ...state,
          register_info: [registerInfo],
        };
      }
    }

    case "init.register.state": {
      const register_info = state.register_info;
      register_info.length = 0;

      return {
        ...state,
        register_info: register_info,
        is_auth: nonData,
        is_doublepass: nonData,
      };
    }

    default:
      return state;
  }
};

export default user;
