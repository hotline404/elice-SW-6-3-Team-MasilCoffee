import axios from "axios";

export const getAllBoards = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/boards");
  const boards = res.data.data;

  return boards;
}

export const getBoard = async (boardId) => {
  const res = await axios.get(`http://localhost:5000/api/v1/boards/${boardId}`);
  const board = res.data.data;

  return board;
}