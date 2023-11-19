const Board = require("../models/BoardSchema");

class BoardService {
  static async createBoard(BoardData) {
    try {
      const newBoard = new Board(BoardData);
      const savedBoard = await newBoard.save();
      return savedBoard;
    } catch (error) {
      throw error;
    }
  }

  static async getAllBoards() {
    try {
      const boards = await Board.find();
      return boards;
    } catch (error) {
      throw error;
    }
  }

  static async getBoardsByCategory(category) {
    try {
      const boards = await Board.find({ category: category });
      return boards;
    } catch (error) {
      throw error;
    }
  }

  static async getBoardById(boardId) {
    try {
      const board = await Board.findById(boardId);
      return board;
    } catch (error) {
      throw error;
    }
  }

  static async updateBoard(boardId, updatedData) {
    try {
      const updatedBoard = await Board.findByIdAndUpdate(boardId, updatedData, {
        new: true,
      });
      return updatedBoard;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBoard(boardId) {
    try {
      const deletedBoard = await Board.findByIdAndDelete(boardId);
      return deletedBoard;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BoardService;
