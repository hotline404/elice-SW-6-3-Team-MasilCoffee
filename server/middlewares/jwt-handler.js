const JWT = require("../utils/jwt-token");

class JwtMiddleware {
  // 토큰 유무 확인하기
  static checkToken(req, res, next) {
    const auth = req.header("Authorization");
    if (!auth) {
      return res.status(401).json({ error: "인증 실패 (토큰이 없습니다)" });
    }
    try {
      req.token = JWT.verifyToken(auth.split(" ")[1]);
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  // 관리자 권환 확인하기
  static checkAdmin(req, res, next) {
    if (req.token.role == "Admin") {
      next();
    } else {
      return res.status(403).json({ error: "권한이 없습니다." });
    }
  }
}

module.exports = JwtMiddleware;
