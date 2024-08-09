const pool = require('../config/database');

class Produto {
    async criarProduto(produto) {
        const { descricao, quantidade_estoque, valor, categoria_id } = produto;
        const query = `
      INSERT INTO produtos (descricao, quantidade_estoque, valor, categoria_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
        const values = [descricao, quantidade_estoque, valor, categoria_id];
        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (err) {
            console.error('Erro ao criar produto:', err);
            throw err;
        }
    }

    async listarProdutos() {
        const query = 'SELECT * FROM produtos;';
        try {
            const result = await pool.query(query);
            return result.rows;
        } catch (err) {
            console.error('Erro ao listar produtos:', err);
            throw err;
        }
    }

    async atualizarProduto(id, produto) {
        const { descricao, quantidade_estoque, valor, categoria_id } = produto;
        const query = `
      UPDATE produtos
      SET descricao = $1, quantidade_estoque = $2, valor = $3, categoria_id = $4
      WHERE id = $5
      RETURNING *;
    `;
        const values = [descricao, quantidade_estoque, valor, categoria_id, id];
        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (err) {
            console.error('Erro ao atualizar produto:', err);
            throw err;
        }
    }

    async deletarProduto(id) {
        const query = 'DELETE FROM produtos WHERE id = $1 RETURNING *;';
        const values = [id];
        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (err) {
            console.error('Erro ao deletar produto:', err);
            throw err;
        }
    }
}

module.exports = Produto;
