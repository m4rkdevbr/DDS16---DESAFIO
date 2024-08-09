const ProdutoService = require('../services/produtoService');

class ProdutoController {
    async listProdutos(req, res) {
        try {
            const produtos = await ProdutoService.listProduto();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar os produtos.' });
        }
    }

    async createProduto(req, res) {
        try {
            const produto = await ProdutoService.createProduto(req.body);
            res.json(produto);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar o produto.' });
        }
    }
}

module.exports = new ProdutoController();