import { BOARD_TYPE } from "./_types";

//전체 or 카테고리별 게시글 가져오기(초기)
export const actionGetAllBoards = (boards) => {
  return {
    type: BOARD_TYPE.GET_ALL_BOARDS,
    payload: boards,
  };
};

//전체 or 카테고리별 게시글 가져오기(페이지네이션)
export const actionGetAllMoreBoards = (boards) => {
  return {
    type: BOARD_TYPE.GET_ALL_MORE_BOARDS,
    payload: boards,
  };
};

//게시물 검색(전체)
export const actionSearchBoards = (quary) => {
  return {
    type: BOARD_TYPE.GET_SEARCH_BOARDS,
    payload: quary,
  };
};

//해당 게시물 가져오기
export const actionGetBoard = (board) => {
  return {
    type: BOARD_TYPE.GET_BOARD,
    payload: board,
  };
}

//게시물 작성하기
export const actionAddBoard = (board) => {
  return {
    type: BOARD_TYPE.ADD_BOARD,
    payload: board,
  }
}

//게시물 수정하기
export const actionUpdateBoard = (board) => {
  return {
    type: BOARD_TYPE.UPDATE_BOARD,
    payload: board,
  }
}

//게시물 삭제하기
export const actionRemoveBoard = (boardId) => {
  return {
    type: BOARD_TYPE.REMOVE_BOARD,
    payload: boardId,
  };
};