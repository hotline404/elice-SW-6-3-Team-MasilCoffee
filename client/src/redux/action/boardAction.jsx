import { BOARD_TYPE } from "./_types";


export const actionGetAllBoards = (boards) => {
  return {
    type: BOARD_TYPE.GET_ALL_BOARDS,
    payload: boards,
  };
};

export const actionSearchBoards = (quary) => {
  return {
  type: BOARD_TYPE.GET_SEARCH_BOARDS,
  payload: quary,
  };
};

export const actionGetFilter = (name) => ({
  type: BOARD_TYPE.GET_FILTER_BOARDS,
  payload: {name},
});

export const actionRemoveFilter = (name) => {
  return {
  type: BOARD_TYPE.REMOVE_FILTER_BOARDS,
  payload: name,
  };
};

export const actionRemoveBoard = () => {
  return {
  type: BOARD_TYPE.REMOVE_BOARD,
  };
};