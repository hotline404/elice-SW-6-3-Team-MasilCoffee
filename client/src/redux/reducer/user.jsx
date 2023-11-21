// import React from "react";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import FilterFn from "../../util/FilterCheckBox/FilterFn";
// import matchUser from "../../util/matchUser/matchUser";

// // const checkboxes = [
// //   {
// //     id: "filter-all",
// //     name: "filter-all",
// //     pathFn: (user) => user,
// //     label: "Filter all",
// //   },
// //   {
// //     id: "filter-userName",
// //     name: "filter-userName",
// //     pathFn: (user) => user.name,
// //     label: "Filter user name",
// //   },
// //   {
// //     id: "filter-tel",
// //     name: "filter-tel",
// //     pathFn: (user) => user.phone,
// //     label: "Filter user tel",
// //   },
// //{
// //     id: "filter-id",
// //     name: "filter-id",
// //     pathFn: (user) => user.id,
// //     label: "Filter user id",
// //   },
// // ];

// const initUsersState = {
//   filter: {},
//   searchData: [],
//   users: [],
//   message: "",
// };

// const initUserState = {
//   name: "",
//   id: "",
//   password: "",
//   phone: "",
//   nickname: "",
// };

// const reducer = () => {
//   switch (action.type) {
//     case "get.all_user": {
//       return {
//         ...state,
//         searchData: action.payload.allUser,
//         users: action.payload.allUser,
//         message: action.payload.message,
//       };
//     }

//     case "get.search": {
//       const { searchData, filter } = state;
//       const { query } = action.payload;

//       if (!query) {
//         return { ...state, users: searchData };
//       }

//       const filteredUser = searchData.filter(FilterFn(filter, query));
//       return { ...state, users: filteredUser };
//     }

//     case "add.filter": {
//       const { name, pathFn } = action.payload;
//       return { ...state, filter: { ...state.filter, [name]: pathFn } };
//     }

//     case "remove.filter": {
//       const { [action.payload.name]: _, ...rest } = state.filter;
//       return { ...state, filter: rest };
//     }

//     case "get.user": {
//       const { userData } = action.payload;
//       return {
//         name: userData.name,
//         id: userData.id,
//         phone: userData.phone,
//         nickname: userData.nickname,
//       };
//     }

//     case "post.user": {
//       const { id, userName, nkName, phone } = action.payload;

//       return {
//         name: userName,
//         id: id,
//         nickname: nkName,
//         phone: phone,
//       };
//     }

//     default:
//       return state;
//   }
// };
// export default function User(props) {
//   return <Provider store={UserStore}>{props.children}</Provider>;
// }
