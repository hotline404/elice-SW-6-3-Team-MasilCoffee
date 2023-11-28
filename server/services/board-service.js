const Board = require("../models/board-schema");
const { User } = require("../models/user-schema");

class BoardService {
  // 게시글 생성
  static async createBoard(boardData) {
    try {
      const user = await User.findById(boardData.userId);
      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      const imagePaths = boardData.image ? boardData.image : [];
      const newBoard = new Board({
        user: boardData.userId,
        nickname: user.nickname,
        category: boardData.category,
        post: boardData.post,
        image: imagePaths,
        tags: boardData.tags,
      });

      const savedBoard = await newBoard.save();
      return savedBoard;
    } catch (error) {
      throw error;
    }
  }

  // 모든 게시글 조회
  static async getAllBoards() {
    try {
      const boards = await Board.find().sort({ createdAt: -1 });
      return boards;
    } catch (error) {
      throw error;
    }
  }

  // 본인 모든 게시글 조회
  static async getAllBoardsByUserId(userId) {
    try {
      const boards = await Board.find({ user: userId }).sort({ createdAt: -1 });
      return boards;
    } catch (error) {
      console.error("모든 게시글 가져오기 중 오류 발생:", error);
      throw error;
    }
  }

  // 특정 게시글 갖고오기
  static async getBoardById(boardId) {
    try {
      const board = await Board.findById(boardId);
      return board;
    } catch (error) {
      throw error;
    }
  }

  static async getBoardsByCategory(category) {
    try {
      const boards = await Board.find({ category }).sort({ createdAt: -1 });
      return boards;
    } catch (error) {
      throw error;
    }
  }

  static async updateBoard(userIdFromToken, boardId, updatedData, imagePaths) {
    try {
      const existingBoard = await Board.findById(boardId);
      if (!existingBoard) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }
      const userIdOfExistingBoard = existingBoard.user.toString();

      if (userIdFromToken !== userIdOfExistingBoard) {
        throw new Error("권한이 없습니다.");
      }

      const updatedBoard = await Board.findByIdAndUpdate(
        boardId,
        {
          ...updatedData,
          image: imagePaths.length > 0 ? imagePaths : existingBoard.image,
        },
        { new: true }
      );

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
