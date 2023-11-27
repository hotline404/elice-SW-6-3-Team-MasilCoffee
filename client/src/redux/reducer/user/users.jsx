import DateFormat from "../../../util/DateFormat/DateFormat";
import { USERS_TYPE } from "../../action/_types";

const initUsersState = {
  searchData: [],
  users: [],
  tableData: [],
};

const formatUserForTable = (user) => [user._id, user.name, user.email, user.phone, user.nickname, DateFormat("date", user.createdAt)];

const users = (state = initUsersState, action) => {
  switch (action.type) {
    case USERS_TYPE.GET_ALL_USERS: {
      return {
        ...state,
        searchData: [action.payload.initData],
        users: [action.payload.initData],
        tableData: action.payload.initData.map(formatUserForTable),
      };
    }

    case USERS_TYPE.SEARCH_USERS: {
      const { users } = state;
      console.log("userData", users[0]);

      if (!action.payload) {
        return { ...state, users: users };
      }
      const { name, phone, nickname } = action.payload;

      const findUser = users[0].filter((user) => {
        let filterName = true;
        let filterPhone = true;
        let filterNick = true;

        if (phone !== "") {
          filterPhone = user.phone === phone;
        }
        if (name !== "") {
          filterName = user.name === name;
        }
        if (nickname !== "") {
          filterNick = user.nickname === nickname;
        }

        return filterName && filterPhone && filterNick;
      });

      return {
        ...state,
        searchData: findUser,
        tableData: findUser.map(formatUserForTable),
      };
    }

    // case "get.user": {
    //   const { initData } = action.payload;
    //   return { ...state, users: initData };
    // }

    case USERS_TYPE.UPDATE_USERS: {
      const updatedUser = action.payload;

      console.log("userData", users[0]);
      const updatedUsers = state.users[0].map((user) => (user._id === updatedUser._id ? updatedUser : user));
      console.log("업데이트된 유저", updatedUsers);
      return {
        ...state,
        users: updatedUsers,
        tableData: updatedUsers.map(formatUserForTable),
      };
    }

    case USERS_TYPE.DELETE_USERS: {
      const deletedUserId = action.payload;
      const filteredUsers = state.users[0].filter((user) => user._id !== deletedUserId);
      return {
        ...state,
        users: filteredUsers,
        tableData: filteredUsers.map(formatUserForTable),
      };
    }

    default:
      return state;
  }
};

export default users;
