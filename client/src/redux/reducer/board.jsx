import { BOARD_TYPE } from "../action/_types";

// filters: 선택한 카테고리, boards: 전체 게시글, searchBoards: 검색 된 게시글, board: 게시글 1개
const initialState = {
  filters: "",
  boards: [],
  searchBoards: [],
  board: [],
};

const filterFn = (filters, query, boards) => {
  const filtered = boards.filter((el) => el.category === filters);
  return filtered.filter((e) => e.post.search(query) !== -1);
};

const board = (state = initialState, action) => {
  switch (action.type) {
    //모든 게시물 가져오기
    case BOARD_TYPE.GET_ALL_BOARDS:
      return {
        ...state,
        boards: action.payload,
        searchBoards: action.payload,
      };

    //게시물 검색
    case BOARD_TYPE.GET_SEARCH_BOARDS:
      const { boards, filters } = state;
      const query = action.payload;

      if (!query && filters !== "") { //검색쿼리X, 카테고리O
        const filteredCate = boards.filter((e) => e.category === filters);
        return {
          ...state,
          searchBoards: filteredCate,
        };
      } else if (!query && filters === "") { //검색쿼리X, 카테고리X
        return {
          ...state,
          searchBoards: boards,
        };
      } else if (query && filters === "") { //검색쿼리O, 카테고리X
        const searchBoard = boards.filter((e) => e.post.search(query) !== -1);
        return {
          ...state,
          searchBoards: searchBoard,
        };
      }
      const filteredData = filterFn(filters, query, boards); //검색쿼리O, 카테고리O

      return {
        ...state,
        searchBoards: filteredData,
      };

    //카테고리별 모든 게시물 (선택)
    case BOARD_TYPE.GET_FILTER_BOARDS: {
      return {
        ...state,
        filters: action.payload.name,
      };
    }

    //카테고리별 모든 게시물 (선택해제)
    case BOARD_TYPE.REMOVE_FILTER_BOARDS:
      return {
        ...state,
        filters: "",
      };

    case BOARD_TYPE.REMOVE_BOARD:
      return {
        ...state,
        board: [],
      };

    default:
      return state;
  }
};

export default board;
