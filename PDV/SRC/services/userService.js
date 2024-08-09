const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

class UserService {
    static async registerUser(user) {
        user.senha = await bcrypt.hash(user.senha, 10);
        return UserModel.create(user);
    }

    static async loginUser(email, senha) {
        const user = await UserModel.getByEmail(email);
        if (!user) throw new Error('Usuário não encontrado');

        const validPassword = await bcrypt.compare(senha, user.senha);
        if (!validPassword) throw new Error('Senha incorreta');

        return user;
    }

    static async getUserProfile(userId) {
        return UserModel.getById(userId);
    }

    static async updateUserProfile(userId, updatedUser) {
        const user = await UserModel.getById(userId);
        if (!user) throw new Error('Usuário não encontrado');

        if (!updatedUser.nome || !updatedUser.email || !updatedUser.senha) {
            throw new Error('Nome, email e senha são obrigatórios');
        }

        const existingUser = await UserModel.getByEmail(updatedUser.email);
        if (existingUser && existingUser.id !== userId) {
            throw new Error('O email já está em uso por outro usuário');
        }

        if (updatedUser.senha) {
            updatedUser.senha = await bcrypt.hash(updatedUser.senha, 10);
        }

        Object.assign(user, updatedUser);
        return UserModel.update(user);
    }


    static async updatePassword(email, novaSenha) {
        const hashedPassword = await bcrypt.hash(novaSenha, 10);
        await UserModel.updatePassword(email, hashedPassword);
    }

    static async verifyUser(email, senha) {
        const user = await UserModel.getByEmail(email);
        if (!user) return null;

        const validPassword = await bcrypt.compare(senha, user.senha);
        if (!validPassword) return null;

        return user;
    }
}

module.exports = UserService;