import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import FilterFn from "../../util/FilterCheckBox/FilterFn";

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
// ];

const initState = {
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
  }
};
const UserStore = createStore(reducer, initState);

export default function user(props) {
  return <Provider store={UserStore}>{props.children}</Provider>;
}
