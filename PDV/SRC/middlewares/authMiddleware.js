// authMiddleware.js
const AuthService = require("../services/authService");

const authMiddleware = async (req, res, next) => {
    // Verificando se o token foi informado no header
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Token de autenticação não informado" });
    }

    // Verificando se o token é válido
    const tokenParts = token.split(" ");

    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
        return res.status(401).json({ message: "Token de autenticação inválido" });
    }

    const tokenValue = tokenParts[1];

    // Verificando se o token é válido
    const authService = new AuthService();
    const decoded = await authService.verifyToken(tokenValue);

    if (!decoded) {
        return res.status(401).json({ message: "Token de autenticação inválido" });
    }

    // Adicionando o usuário autenticado à requisição
    req.user = decoded;

    next();
};

// Exportando o middleware de autenticação
module.exports = authMiddleware;