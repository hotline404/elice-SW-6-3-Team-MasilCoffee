import { BOARD_TYPE } from "../action/_types";

const initialState = {
  boards: [],
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_TYPE.GET_ALL_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    case BOARD_TYPE.GET_BOARD:
      return {
        ...state,
        boards: action.payload,
      }
    default:
      return state;
  }
}

export default board;