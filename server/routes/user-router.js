const express = require("express");
const UserRouter = express.Router();
const userService = require("../services/user-service");
const asyncHandler = require("../middlewares/async-handler");
const errorHandler = require("../middlewares/error-handler");
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
    const { user } = authUser;
    const { role } = user;

    const tokenPayload = {
      userId: user._id,
      email: user.email,
      role: user.role,
    };
    const token = JWT.createToken(tokenPayload);
    ResponseHandler.respondWithSuccess(res, { role, token });
  })
);

// 모든 사용자 가져오기 (관리자 권한 필요)
UserRouter.get(
  "/",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    const users = await userService.getAllUsers();
    ResponseHandler.respondWithSuccess(res, { users, token: req.user });
  })
);

// // 특정 사용자 가져오기
// UserRouter.get(
//   "/:userId",
//   asyncHandler(async (req, res) => {
//     const user = await userService.getUserById(req.params.userId);
//     if (!user) {
//       return ResponseHandler.respondWithNotfound(res);
//     }
//     ResponseHandler.respondWithSuccess(res, user);
//   })
// );

// 사용자 정보 수정 (자기 자신 또는 관리자만 가능)
// 자기 자신은 role 건들 수 없고 관리자만 가능하게해야함....ㅜㅜ
// 본인: 이름, 닉네임, 전화번호, 프사,
UserRouter.patch(
  "/:userId",
  JwtMiddleware.checkToken,
  JwtMiddleware.checkAdmin,
  asyncHandler(async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    ResponseHandler.respondWithSuccess(res, user);
  })
);

// 회원탈퇴 (자기 자신 또는 관리자만 가능)
UserRouter.delete(
  "/:userId",
  JwtMiddleware.checkToken,
  asyncHandler(async (req, res) => {
    const user = await userService.deleteUser(req.params.userId);
    ResponseHandler.respondWithSuccess(res, user);
  })
);

module.exports = UserRouter;
