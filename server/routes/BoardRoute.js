const express = require('express');
const BoardRouter = express.Router();
const BoardService = require('../services/BoardService.js');
const asyncHandler = require('../middlewares/async-handler.js');

// 모든 게시글 가져오기
BoardRouter.get('/', asyncHandler(async (req, res) => {
    const boards = await BoardService.getAllBoards();
    res.json(boards);
}));

// // 특정 카테고리의 게시글 가져오기
// BoardRouter.get('/category/:category', asyncHandler(async (req, res) => {
//     const boards = await BoardService.getBoardsByCategory(req.params.category);
//     res.json(boards);
// }));

// 특정 ID의 게시글 가져오기
BoardRouter.get('/:boardId', asyncHandler(async (req, res) => {
    const board = await BoardService.getBoardById(req.params.boardId);
    res.json(board);
}));

// 새로운 게시글 생성
BoardRouter.post('/', asyncHandler(async (req, res) => {
    console.log(req.body);
    const savedBoard = await BoardService.createBoard(req.body);
    res.json(savedBoard);
}));

// 특정 ID의 게시글 수정
BoardRouter.put('/:boardId', asyncHandler(async (req, res) => {
    const updatedBoard = await BoardService.updateBoard(
        req.params.boardId,
        req.body
    );
    res.json(updatedBoard);
}));

// 특정 ID의 게시글 삭제
BoardRouter.delete('/:boardId', asyncHandler(async (req, res) => {
    const deletedBoard = await BoardService.deleteBoard(req.params.boardId);
    res.json(deletedBoard);
}));

module.exports = BoardRouter;
