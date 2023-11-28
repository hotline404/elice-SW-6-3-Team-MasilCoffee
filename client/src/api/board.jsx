import axios from "axios";

//모든 게시판 불러오기
export const getAllBoards = async (currentPage, pageSize) => {
  try { 
    const res = await axios.get(`http://localhost:5000/api/v1/boards?currentPage=${currentPage}&pageSize=${pageSize}`);
    const boards = res.data.data.data;
    
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
    const res = await axios.get(`http://localhost:5000/api/v1/boards/category/${category}`);
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
  try {
    const res = await axios.post("http://localhost:5000/api/v1/boards/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 등록되었습니다.");
    }

    const board = res.data.data;
    return board;
  } catch (error) {
    alert("게시글 작성을 실패하였습니다.");
    console.error("error(addBoard)", error.response || error);
  }
}

//게시글 수정하기
export const updateBoard = async (token, boardId, formData) => {
  console.log(boardId)
  try {
    const res = await axios.put(`http://localhost:5000/api/v1/boards/${boardId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 수정되었습니다.");
    }

    const board = res.data.data;
    return board;
  } catch (error) {
    alert("게시글 수정에 실패하였습니다.");
    console.error("error(updateBoard)", error);
  }
};

//게시글 삭제하기
export const deleteBoard = async (token, boardId) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/boards/${boardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (res.status >= 200 && res.status < 300) {
      alert("게시글이 삭제되었습니다.");
    }
  } catch (error) {
    alert("게시글 삭제에 실패하였습니다.");
    console.error("error(deleteBoard)", error);
  }
}