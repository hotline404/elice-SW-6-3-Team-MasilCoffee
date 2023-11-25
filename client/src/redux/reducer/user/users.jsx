//import FilterFn from "../../../util/FilterCheckBox/FilterFn";

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
};

const users = (state = initUsersState, action) => {
  switch (action.type) {
    case "init": {
      return {
        ...state,
        searchData: [action.payload],
        users: [action.payload],
      };
    }

    case "get.search": {
      const { searchData } = state;
      console.log("state", state);
      if (!action.payload) {
        return { ...state, users: searchData };
      }
      const { name, phone, nickname } = action.payload;

      const findUser = searchData[0].filter((user) => {
        let filterName = true;
        let filterPhone = true;
        let filterNick = true;
        console.log("searchDatass", searchData);

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

      return { ...state, users: findUser };
    }

    case "get.user": {
      const { initData } = action.payload;
      return { ...state, users: initData };
    }

    case "post.user": {
      const { updateUser } = action.payload;

      return {
        ...state,
        users: updateUser,
      };
    }

    default:
      return state;
  }
};

export default users;
