import { BOARD_TYPE } from "./_types";

//모든 게시물 가져오기(초기)
export const actionGetAllBoards = (boards) => {
  return {
    type: BOARD_TYPE.GET_ALL_BOARDS,
    payload: boards,
  };
};

//모든 게시물 가져오기(페이지네이션)
export const actionGetAllMoreBoards = (boards) => {
  return {
    type: BOARD_TYPE.GET_ALL_MORE_BOARDS,
    payload: boards,
  };
};

//게시물 검색
export const actionSearchBoards = (quary) => {
  return {
    type: BOARD_TYPE.GET_SEARCH_BOARDS,
    payload: quary,
  };
};

//카테고리별 모든 게시물 (선택)
export const actionGetFilter = (name) => ({
  type: BOARD_TYPE.GET_FILTER_BOARDS,
  payload: {name},
});

//카테고리별 모든 게시물 (선택해제)
export const actionRemoveFilter = (name) => {
  return {
    type: BOARD_TYPE.REMOVE_FILTER_BOARDS,
    payload: name,
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