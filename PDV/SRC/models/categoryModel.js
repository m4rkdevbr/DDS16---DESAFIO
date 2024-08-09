const pool = require('../config/database');

class CategoryModel {
    static async getAll() {
        const result = await pool.query('SELECT * FROM categorias');
        return result.rows;
    }

    static async create(category) {
        const result = await pool.query(
            'INSERT INTO categorias (descricao) VALUES ($1) RETURNING *',
            [category.descricao]
        );
        return result.rows[0];
    }
}

module.exports = CategoryModel;