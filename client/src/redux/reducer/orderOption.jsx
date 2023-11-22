import { ORDEROPTION_TYPE } from "../action/_types";

const initialState = {
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
};
const oderOption = (state = initialState, action) => {
  switch (action.type) {
    case ORDEROPTION_TYPE.ADD_SHOT_ORDEROPTION:
      return {
        ...state,
        shot: action.payload,
      };
    case ORDEROPTION_TYPE.ADD_SYRUPS_ORDEROPTION:
      return {
        ...state,
        syrups: action.payload,
      };
    case ORDEROPTION_TYPE.ADD_ICE_ORDEROPTION:
      return {
        ...state,
        ice: action.payload,
      };

    case ORDEROPTION_TYPE.ADD_WHIPPING_ORDEROPTION:
      return {
        ...state,
        whipping: action.payload,
      };
    case ORDEROPTION_TYPE.ADD_DRIZZLE_ORDEROPTION:
      return {
        ...state,
        drizzle: action.payload,
      };
    case ORDEROPTION_TYPE.ADD_MILK_ORDEROPTION:
      return {
        ...state,
        milk: action.payload,
      };
    default:
      return state;
  }
};
export default oderOption;
