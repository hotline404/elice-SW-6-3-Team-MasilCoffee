import { combineReducers } from "redux";
import board from "./board";
import comment from "./comment";
import orderOption from "./orderOption";
import order from "./order";
import orderDetail from "./orderDetail";
import product from "./product";
import users from "./user/users";
import user from "./user/user";
import login from "./login/login";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["auth"], // target (reducer name)
};

const rootReducer = combineReducers({
  board,
  comment,
  orderOption,
  order,
  orderDetail,
  product,
  users,
  user,
  login,
});

export default persistReducer(persistConfig, rootReducer);
