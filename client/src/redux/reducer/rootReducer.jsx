import { combineReducers } from "redux";
import board from "./board";
import comment from "./comment";
import orderOption from "./orderOption";
import order from "./order";
import payment from "./payment";
import product from "./product";
import users from "./user/users";
import user from "./user/user";
import login from "./login/login";

const rootReducer = combineReducers({
  board,
  comment,
  orderOption,
  order,
  payment,
  product,
  users,
  user,
  login,
});

export default rootReducer;
