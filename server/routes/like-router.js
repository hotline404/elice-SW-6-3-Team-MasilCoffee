const express = require('express');
const LikeRouter = express.Router();
const asyncHandler = require('express-async-handler');
const JwtMiddleware = require('../middlewares/jwt-middleware');
const LikeService = require('../services/like-service');
const ResponseHandler = require('../utils/response-handler');

LikeRouter.put(
    '/:boardId',
    JwtMiddleware.checkToken,
    asyncHandler(async (req, res) => {
      const { boardId } = req.params;
      const userId = req.tokenData._id;
  
      try {
        const likeData = {
          board: boardId,
          user: userId,
        };
  
        const existingLike = await LikeService.findLike(userId, boardId);
  
        if (existingLike) {
          // 좋아요가 이미 존재하면 삭제
          const deletedLike = await LikeService.deleteLike(userId, boardId);
          ResponseHandler.respondWithSuccess(res, { action: 'delete', result: deletedLike });
        } else {
          // 좋아요가 존재하지 않으면 추가
          const newLike = await LikeService.createLike(likeData);
          ResponseHandler.respondWithSuccess(res, { action: 'create', result: newLike });
        }
      } catch (error) {
        ResponseHandler.respondWithError(res, 500, '내부 서버 오류');
      }
    })
  );
  
  module.exports = LikeRouter;