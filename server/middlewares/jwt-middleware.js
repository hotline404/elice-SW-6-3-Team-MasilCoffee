const jwt = require('jsonwebtoken');
const ResponseHandler = require('./responses');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

class JwtMiddleware {
    static generateToken(payload) {
        return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    }


    static verifyToken(token) {
        try {
            console.log(token);
            const decoded = jwt.verify(token, SECRET_KEY);
            console.log(decoded);
            return decoded;
        } catch (error) {
            console.error(error);
            console.error('토큰 불일치.:', error.message);
            return null;
        }
    }

    static middleware(req, res, next) {
        const authoriztion = req.header('Authorization');
        if (!token) {
            return ResponseHandler.respondWithError(res, '인증 실패. 토큰이 없습니다.', 401);
        }
        const [bearer, token] = authoriztion.split(" ");
        try {
            const decodedUser = JwtMiddleware.verifyToken(token);
            console.log(decodedUser);
            if (!decodedUser) {
                console.error('Invalid Token:', token);
                return ResponseHandler.respondWithError(res, '유효하지 않은 토큰입니다.', 401);
            }
            req.user = decodedUser;
            next();
        } catch (error) {
            console.error('Token Verification Error:', error.message);
            return ResponseHandler.respondWithError(res, '유효하지 않은 토큰입니다.', 401);
        }
    }


    static checkAdmin(req, res, next) {
        if (req.user.role === 'Admin') {
            next();
        } else {
            return ResponseHandler.respondWithError(res, '권한이 없습니다.', 403);
        }
    }
}

module.exports = JwtMiddleware;
