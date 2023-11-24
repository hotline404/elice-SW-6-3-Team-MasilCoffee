import { BOARD_TYPE } from "./_types";

export const actionGetAllBoards = (boards) => {
  return {
    type: BOARD_TYPE.GET_ALL_BOARDS,
    payload: boards,
  }
}

export const actionGetBoard = (board) => {
  return {
    type: BOARD_TYPE.GET_BOARD,
    payload: board,
  }
}