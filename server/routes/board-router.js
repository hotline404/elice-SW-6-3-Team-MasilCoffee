const express = require("express");
const BoardRouter = express.Router();
const BoardService = require("../services/board-service");
const imageUploader = require("../middlewares/s3-handler");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler");
const JwtMiddleware = require("../middlewares/jwt-handler");

// 특정 카테고리의 게시글 가져오기
BoardRouter.get(
  "/categories/:category",
  asyncHandler(async (req, res) => {
    const category = req.params.category;
    const { currentPage, pageSize } = req.query;
    const boards = await BoardService.getBoardsByCategory(
      category,
      currentPage,
      pageSize
    );
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 특정 board ID의 게시글 가져오기
BoardRouter.get(
  "/board/:boardId",
  asyncHandler(async (req, res) => {
    const board = await BoardService.getBoardById(req.params.boardId);
    if (!board) {
      return ResponseHandler.respondWithNotfound(res);
    }
    ResponseHandler.respondWithSuccess(res, board);
  })
);

// 모든 게시글 가져오기 (모든 사용자, 모든 게시물)
BoardRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { currentPage, pageSize, searchTerm } = req.query;
    const boards = await BoardService.getAllBoards(
      currentPage,
      pageSize,
      searchTerm
    );
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 본인이 작성한 모든 게시글 가져오기
BoardRouter.get(
  "/mypost",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const userId = req.tokenData._id;
    const { currentPage, pageSize } = req.query;
    const boards = await BoardService.getAllBoardsByUserId(
      user,
      currentPage,
      pageSize
    );
    ResponseHandler.respondWithSuccess(res, boards);
  })
);

// 새로운 게시글 생성
BoardRouter.post(
  "/",
  imageUploader.array("file"),
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const userId = req.tokenData._id;
    const userNickname = req.tokenData._id;
    const { category, post, tags } = req.body;
    const imagePaths = req.files.map((file) => file.location);
    const boardData = {
      userId,
      userNickname,
      category,
      post,
      image: imagePaths,
      tags,
    };
    const newBoard = await BoardService.createBoard(boardData);
    ResponseHandler.respondWithSuccess(res, newBoard);
  })
);

// 특정 ID의 게시글 수정 (본인만 가능)
BoardRouter.put(
  "/:boardId",
  JwtMiddleware.checkToken,
  imageUploader.array("file"),
  asyncHandler(async (req, res) => {
    const uploadedFiles = req.files || [];
    const imagePaths = uploadedFiles.map((file) => file.location);

    const existingBoard = await BoardService.getBoardById(req.params.boardId);
    const previousImagePaths = existingBoard.image || [];

    const finalImagePaths =
      imagePaths.length > 0 ? imagePaths : previousImagePaths;

    const updatedBoard = await BoardService.updateBoard(
      req.tokenData._id,
      req.params.boardId,
      req.body,
      finalImagePaths
    );
    ResponseHandler.respondWithSuccess(res, updatedBoard);
  })
);

// 특정 ID의 게시글 삭제
BoardRouter.delete(
  "/:boardId",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const boardId = req.params.boardId;
    try {
      const boardAuthorId = await BoardService.getBoardAuthorId(boardId);
      if (
        req.tokenData._id == boardAuthorId.toString() ||
        req.tokenData.role == "Admin"
      ) {
        const deletedBoard = await BoardService.deleteBoard(boardId);
        ResponseHandler.respondWithSuccess(res, deletedBoard);
      } else {
        throw new Error("권한이 없습니다.");
      }
    } catch (error) {
      ResponseHandler.respondWithError(res, 400, error.message);
    }
  })
);

module.exports = BoardRouter;
