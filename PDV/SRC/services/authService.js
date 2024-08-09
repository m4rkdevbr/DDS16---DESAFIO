// authService.js
const jwt = require("jsonwebtoken");

class AuthService {
    async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return decoded;
        } catch (err) {
            return null;
        }
    }
}

module.exports = AuthService;