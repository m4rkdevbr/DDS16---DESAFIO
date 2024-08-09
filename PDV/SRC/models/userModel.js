const pool = require('../config/database');

class UserModel {
    static async getByEmail(email) {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        return result.rows[0];
    }

    static async create(user) {
        const result = await pool.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [user.nome, user.email, user.senha]
        );
        return result.rows[0];
    }

    static async updatePassword(email, novaSenha) {
        const result = await pool.query(
            'UPDATE usuarios SET senha = $1 WHERE email = $2 RETURNING *',
            [novaSenha, email]
        );
        return result.rows[0];
    }

    //obter o ID
    static async getById(id) {
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async update(user) {
        const result = await pool.query(
            'UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
            [user.nome, user.email, user.id]
        );
        return result.rows[0];
    }
}

module.exports = UserModel;