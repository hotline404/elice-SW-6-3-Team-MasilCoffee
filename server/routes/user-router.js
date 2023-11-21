const express = require("express");
const UserRouter = express.Router();
const userService = require("../services/user-service");
const asyncHandler = require("../middlewares/async-handler");
const ResponseHandler = require("../middlewares/res-handler.js");
const JwtMiddleware = require("../middlewares/jwt-handler");
const JWT = require("../utils/jwt-token");

// 사용자 생성 (회원 가입)
UserRouter.post(
    "/",
    asyncHandler(async (req, res) => {
        const user = await userService.createUser(req.body);
        ResponseHandler.respondWithSuccess(res, user, 201);
    })
);

// 사용자 로그인
UserRouter.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const authUser = await userService.authenticateUser(email, password);
        // 로그인 실패
        if (!authUser.success) {
            if (authUser.fail == "email") {
                // 이메일 실패
                return ResponseHandler.respondWithError(
                    res,
                    "가입되지 않은 이메일 입니다.",
                    401
                );
            } else if (authUser.fail === "password") {
                // 비밀번호 실패
                return ResponseHandler.respondWithError(
                    res,
                    "로그인 실패. 비밀번호가 올바르지 않습니다.",
                    401
                );
            }
        }
        // 로그인 성공
        const tokenPayload = { user: authUser.user };
        const token = JWT.createToken(tokenPayload);
        ResponseHandler.respondWithSuccess(res, { user: authUser.user.role , token });
    })
);

// ---------------- User -------------------- //

UserRouter.get("/", JwtMiddleware.checkToken, asyncHandler(async (req, res) => {
    const userIdFromToken = req.token.userId;
    const user = await userService.getUserByToken(userIdFromToken);
    if (!user) {
        return ResponseHandler.respondWithError(res, "사용자를 찾을 수 없습니다.", 404);
    }
    ResponseHandler.respondWithSuccess(res, user);
}));


// 회원 정보 수정 (사용자)
UserRouter.patch(
    "/",
    JwtMiddleware.checkToken,
    asyncHandler(async (req, res) => {
        const user = await userService.updateUser(req.token.userId, req.body);
        ResponseHandler.respondWithSuccess(res, user);
    })
);

// 회원탈퇴 (사용자)
UserRouter.delete(
    "/",
    JwtMiddleware.checkToken,
    asyncHandler(async (req, res) => {
        const user = await userService.deleteUser(req.token.userId);
        ResponseHandler.respondWithSuccess(res, user);
    })
);

// ---------------- Admin -------------------- //

// 모든 사용자 가져오기 (관리자)
UserRouter.get(
    "/admin",
    JwtMiddleware.checkToken,
    JwtMiddleware.checkAdmin,
    asyncHandler(async (req, res) => {
        const users = await userService.getAllUsers();
        ResponseHandler.respondWithSuccess(res, { users, token: req.user });
    })
);

// 특정 사용자 가져오기 (관리자)
UserRouter.get(
    "/admin/:userId",
    JwtMiddleware.checkToken,
    JwtMiddleware.checkAdmin,
    asyncHandler(async (req, res) => {
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            return ResponseHandler.respondWithNotfound(res);
        }
        ResponseHandler.respondWithSuccess(res, user);
    })
);

// 회원 정보 수정 (관리자)
UserRouter.patch(
    "/admin/:userId",
    JwtMiddleware.checkToken,
    JwtMiddleware.checkAdmin,
    asyncHandler(async (req, res) => {
        const user = await userService.updateUser(req.params.userId, req.body);
        ResponseHandler.respondWithSuccess(res, user);
    })
);
// 회원탈퇴 (관리자)
UserRouter.delete(
    "/admin/:userId",
    JwtMiddleware.checkToken,
    JwtMiddleware.checkAdmin,
    asyncHandler(async (req, res) => {
        const user = await userService.deleteUser(req.params.userId);
        ResponseHandler.respondWithSuccess(res, user);
    })
);

module.exports = UserRouter;
