import axios from "axios";

//모든 게시판 불러오기
export const getAllBoards = async () => {
  try { 
    const res = await axios.get("http://localhost:5000/api/v1/boards");
    const boards = res.data.data;

    return boards;
  } catch (error) {
    console.error("error(getAllBoards)", error);
  }
}

//해당 게시글 불러오기
export const getBoard = async (boardId) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/boards/${boardId}`);
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getBoard)", error);
  }
  
}

//카테고리별 게시판 불러오기
export const getCategoryBoards = async (category) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/category/${category}`);
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getCategoryBoards)", error);
  }
}

//(마이페이지) 내가 작성한 게시글
export const getMyBoards = async (userId) => {
  try {
    const res = await axios.get(``);
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(getMyBoards)", error);
  }
}

//게시글 작성하기
export const addBoard = async (token, formData) => {
  const boardHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${token}`,
  };
  const boardBody = {formData};

  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/boards",
      boardBody,
      boardHeader
    );
    const board = res.data.data;

    return board;
  } catch (error) {
    alert("게시글 작성을 실패하였습니다.");
    console.error("error(addBoard)", error);
  }
}

//게시글 수정하기
export const updateBoard = async (boardId, data) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/v1/boards/${boardId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const board = res.data.data;

    return board;
  } catch (error) {
    alert("게시글 수정에 실패하였습니다.");
    console.error("error(updateBoard)", error);
  }
}

//게시글 삭제하기
export const deleteBoard = async (boardId) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/boards/${boardId}`);
    const board = res.data.data;

    return board;
  } catch (error) {
    console.error("error(deleteBoard)", error);
  }
}