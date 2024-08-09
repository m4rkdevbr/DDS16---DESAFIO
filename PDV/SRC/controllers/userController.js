const UserService = require('../services/userService');
const { generateToken } = require('../utils/jwt');
const sendEmail = require('../email'); // Ajuste conforme a localização do seu arquivo

class UserController {
    async register(req, res) {
        try {
            const user = await UserService.registerUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao registrar usuário' });
            console.log(error);
        }
    }

    async login(req, res) {
        try {
            const user = await UserService.loginUser(req.body.email, req.body.senha);
            const token = generateToken(user.id);
            res.json({ token });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getUserProfile(req, res) {
        try {
            const userId = req.user.id;
            const user = await UserService.getUserProfile(userId);
            res.json(user);
        } catch (error) {
            res.status(404).json({ error: 'Usuário não encontrado' });
            console.log(error);

        }
    }


    async updateUserProfile(req, res) {
        try {
            const userId = req.user.id;
            const updatedUser = await UserService.updateUserProfile(userId, req.body);
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar perfil de usuário' });
            console.log(error);

        }
    }

    async redefinirSenha(req, res) {
        try {
            const { email, senha_antiga, senha_nova } = req.body;

            const user = await UserService.verifyUser(email, senha_antiga);
            if (!user) {
                return res.status(400).json({ error: 'Email ou senha antiga incorretos.' });
            }

            await UserService.updatePassword(email, senha_nova);

            await sendEmail(email);

            res.status(200).json({ message: 'Senha redefinida com sucesso.' });
        } catch (error) {
            res.status(400).json({ error: error.message });
            console.log(error);
        }
    }
}

module.exports = new UserController();
