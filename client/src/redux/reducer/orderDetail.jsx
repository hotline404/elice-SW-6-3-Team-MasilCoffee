import { ORDER_DETAIL_TYPE } from "../action/_types";
import { calculatePrice } from "../../util/calculatePrice/calculatePrice";

const initialState = {
  id: "",
  itemPrice: 0,
  menu: 1,
  shot: 0,
  syrups: {
    vanilla: 0,
    hazelnut: 0,
    caramel: 0,
  },
  ice: "없음",
  whipping: "없음",
  drizzle: "없음",
  milk: "없음",
  totalPrice: 0,
};

/** 세부항목 api 명세
 * @example
 * 옵션명 {
 *  옵션타입 : "quantity" | "select",
 *  세부항목들 : [
 *    {
 *       세부항목이름 : 가격
 *    },
 *    {
 *       세부항목이름 : 가격
 *    },
 *  ]
 * }
 */

const orderDetail = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ORDER_DETAIL_TYPE.ADD_MENU_ORDER_DETAIL:
      newState.itemPrice = action.payload.itemPrice;
      newState.menu = action.payload.menu;
      break;

    case ORDER_DETAIL_TYPE.ADD_SHOT_ORDER_DETAIL:
      newState.shot = action.payload;
      break;

    case ORDER_DETAIL_TYPE.ADD_SYRUPS_ORDER_DETAIL:
      newState.syrups = action.payload;
      break;

    case ORDER_DETAIL_TYPE.ADD_ICE_ORDER_DETAIL:
      newState.ice = action.payload;
      break;

    case ORDER_DETAIL_TYPE.ADD_WHIPPING_ORDER_DETAIL:
      newState.whipping = action.payload;
      break;

    case ORDER_DETAIL_TYPE.ADD_DRIZZLE_ORDER_DETAIL:
      newState.drizzle = action.payload;
      break;

    case ORDER_DETAIL_TYPE.ADD_MILK_ORDER_DETAIL:
      newState.milk = action.payload;
      break;

    case ORDER_DETAIL_TYPE.RESET_ORDER_DETAIL:
      return initialState;

    default:
      return state;
  }

  newState.totalPrice = calculatePrice(newState);

  return newState;
};
export default orderDetail;
