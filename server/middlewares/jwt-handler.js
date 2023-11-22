const JWT = require("../utils/jwt-token");

class JwtMiddleware {
  // 토큰 유무 확인하기, Header에서 토큰만 추출
  static checkToken(req, res, next) {
    const auth = req.header("Authorization");

    if (!auth) {
      return res.status(401).json({ error: "인증 실패 (토큰이 없습니다)" });
    }

    try {
      const token = auth.split(" ")[1];
      const decodedToken = JWT.verifyToken(token);
      req.token = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  // 관리자 권환 확인하기
  static checkAdmin(req, res, next) {
    if (req.token.role === "Admin") {
      next();
    } else {
      return res.status(403).json({ error: "권한이 없습니다." });
    }
  }
}

module.exports = JwtMiddleware;
