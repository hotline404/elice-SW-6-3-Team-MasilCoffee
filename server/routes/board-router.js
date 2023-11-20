const express = require("express");
const BoardRouter = express.Router();
const BoardService = require("../services/BoardService.js");
const asyncHandler = require("../middlewares/async-handler.js");
const ResponseHandler = require("../middlewares/responses.js");

// 모든 게시글 가져오기
BoardRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const boards = await BoardService.getAllBoards();
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 특정 카테고리의 게시글 가져오기
BoardRouter.get(
  "/category/:category",
  asyncHandler(async (req, res) => {
    const boards = await BoardService.getBoardsByCategory(req.params.category);
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 특정 board ID의 게시글 가져오기
BoardRouter.get(
  "/:boardId",
  asyncHandler(async (req, res) => {
    const board = await BoardService.getBoardById(req.params.boardId);
    if (!board) {
      return ResponseHandler.respondWithNotFound(res);
    }
    ResponseHandler.respondWithSuccess(res, board);
  })
);

// 새로운 게시글 생성
BoardRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const savedBoard = await BoardService.createBoard(req.body);
    ResponseHandler.respondWithSuccess(res, savedBoard);
  })
);

// 특정 ID의 게시글 수정
BoardRouter.put(
  "/:boardId",
  asyncHandler(async (req, res) => {
    const updatedBoard = await BoardService.updateBoard(
      req.params.boardId,
      req.body
    );
    ResponseHandler.respondWithSuccess(res, updatedBoard);
  })
);

// 특정 ID의 게시글 삭제
BoardRouter.delete(
  "/:boardId",
  asyncHandler(async (req, res) => {
    const deletedBoard = await BoardService.deleteBoard(req.params.boardId);
    ResponseHandler.respondWithSuccess(res, deletedBoard);
  })
);

module.exports = BoardRouter;
