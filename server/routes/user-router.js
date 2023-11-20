const express = require('express');
const UserRouter = express.Router();
const userService = require('../services/user-service');
const asyncHandler = require('../middlewares/async-handler');
const errorHandler = require('../middlewares/error-handler');
const ResponseHandler = require('../middlewares/responses');
const JwtMiddleware = require('../middlewares/jwt-middleware');

// 사용자 생성 (회원 가입)
UserRouter.post('/', asyncHandler(async (req, res) => {
    const user = await userService.createUser(req.body);
    ResponseHandler.respondWithSuccess(res, user, 201);
}));

// 사용자 로그인
UserRouter.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.authenticateUser(email, password);
    if (!user) {
        return ResponseHandler.respondWithError(res, '로그인 실패. 이메일 또는 비밀번호가 올바르지 않습니다.', 401);
    }
    const {role} = user;
    const token = JwtMiddleware.generateToken({ userId: user._id, email: user.email });
    console.log('Generated Token:', token);
    ResponseHandler.respondWithSuccess(res, { role, token });
}));


// 모든 사용자 가져오기 (관리자 권한 필요)
UserRouter.get('/', JwtMiddleware.middleware, JwtMiddleware.checkAdmin, asyncHandler(async (req, res) => {
    const users = await userService.getAllUsers();
    const token = req.header('Authorization');
    console.log('Received Token:', token);
    ResponseHandler.respondWithSuccess(res, users);
}));

// 특정 사용자 가져오기
UserRouter.get('/:userId', JwtMiddleware.middleware, asyncHandler(async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    if (!user) {
        return ResponseHandler.respondWithNotfound(res);
    }
    ResponseHandler.respondWithSuccess(res, user);
}));

// 사용자 정보 수정 (자기 자신 또는 관리자만 가능)
UserRouter.patch('/:userId', JwtMiddleware.middleware, asyncHandler(async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    ResponseHandler.respondWithSuccess(res, user);
}));

// 사용자 삭제 (자기 자신 또는 관리자만 가능)
UserRouter.delete('/:userId', JwtMiddleware.middleware, asyncHandler(async (req, res) => {
    const user = await userService.deleteUser(req.params.userId);
    ResponseHandler.respondWithSuccess(res, user);
}));

module.exports = UserRouter;
