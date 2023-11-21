import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import FilterFn from "../../util/FilterCheckBox/FilterFn";
import matchUser from "../../util/matchUser/matchUser";

// const checkboxes = [
//   {
//     id: "filter-all",
//     name: "filter-all",
//     pathFn: (user) => user,
//     label: "Filter all",
//   },
//   {
//     id: "filter-userName",
//     name: "filter-userName",
//     pathFn: (user) => user.name,
//     label: "Filter user name",
//   },
//   {
//     id: "filter-tel",
//     name: "filter-tel",
//     pathFn: (user) => user.phone,
//     label: "Filter user tel",
//   },
//{
//     id: "filter-id",
//     name: "filter-id",
//     pathFn: (user) => user.id,
//     label: "Filter user id",
//   },
// ];

const initUsersState = {
  filter: {},
  searchData: [],
  users: [],
  message: "",
};

const reducer = () => {
  switch (action.type) {
    case "get.all_user": {
      return {
        ...state,
        searchData: action.payload.allUser,
        users: action.payload.allUser,
        message: action.payload.message,
      };
    }

    case "get.search": {
      const { searchData, filter } = state;
      const { query } = action.payload;

      if (!query) {
        return { ...state, users: searchData };
      }

      const filteredUser = searchData.filter(FilterFn(filter, query));
      return { ...state, users: filteredUser };
    }

    case "add.filter": {
      const { name, pathFn } = action.payload;
      return { ...state, filter: { ...state.filter, [name]: pathFn } };
    }

    case "remove.filter": {
      const { [action.payload.name]: _, ...rest } = state.filter;
      return { ...state, filter: rest };
    }

   case "get.user": {
      const { initData } = action.payload;
      return { ...state,
        users: initData
      }
   }

   case "post.user": {
    const { updateUser } = action.payload;
    
    return {
      ...state,
      users: updateUser
    }
   }

    default:
      return state;
  }
};

export const userSearchStore = createStore(reducer, initUsersState)


