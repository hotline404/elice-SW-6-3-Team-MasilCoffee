import { combineReducers } from "redux";
import board from "./board";
import comment from "./comment";
import orderOption from "./orderOption";
import order from "./order";
import orderDetail from "./orderDetail";
import product from "./product";
import user from "./user";

const rootReducer = combineReducers({
  board,
  comment,
  orderOption,
  order,
  orderDetail,
  product,
  user,
});

export default rootReducer;
