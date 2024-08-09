const ProdutoModel = require('../models/produtoModel');

class ProdutoService {
    static async listProduto() {
        return ProdutoModel.getAll();
    }

    static async createProduto(data) {
        return ProdutoModel.create(data);
    }
}

module.exports = ProdutoService;