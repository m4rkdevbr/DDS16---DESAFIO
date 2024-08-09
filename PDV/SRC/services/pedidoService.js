const PedidoModel = require('../models/pedidoModel');

class PedidoService {
    static async listPedidos() {
        return PedidoModel.getAll();
    }

    static async createPedido(data) {
        return PedidoModel.create(data);
    }
}

module.exports = PedidoService;