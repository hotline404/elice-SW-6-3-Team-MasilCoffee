
import { ORDEROPTION_TYPE } from "./_types";

export const actionSetMenuOption = ({ itemPrice, menu }) => {
  return {
    type: ORDEROPTION_TYPE.ADD_MENU_ORDEROPTION,
    payload: {
      itemPrice,
      menu
    },
  };
};
export const actionSetShotOption = (shotOption) => {
  return {
    type: ORDEROPTION_TYPE.ADD_SHOT_ORDEROPTION,
    payload: shotOption,
  };
};
export const actionSetSyrupsOption = (syrupsOption) => {
  return {
    type: ORDEROPTION_TYPE.ADD_SYRUPS_ORDEROPTION,
    payload: syrupsOption,
  };
};
export const actionSetIceOption = (iceOption) => {
  return {
    type: ORDEROPTION_TYPE.ADD_ICE_ORDEROPTION,
    payload: iceOption,
  };
};
export const actionSetWhippingOption = (whippingOption) => {
  return {
    type: ORDEROPTION_TYPE.ADD_WHIPPING_ORDEROPTION,
    payload: whippingOption,
  };
};
export const actionSetDrizzleOption = (drizzleOption) => {
  return {
    type: ORDEROPTION_TYPE.ADD_DRIZZLE_ORDEROPTION,
    payload: drizzleOption,
  };
};
export const actionSetMilkOption = (milkOption) => {
  return {
    type: ORDEROPTION_TYPE.ADD_MILK_ORDEROPTION,
    payload: milkOption,
  };
};
export const actionResetOption = {
    type: ORDEROPTION_TYPE.RESET_OPTION,
    payload: null, //state로 갈거니까 아무것도 안넣을 거임
  };
