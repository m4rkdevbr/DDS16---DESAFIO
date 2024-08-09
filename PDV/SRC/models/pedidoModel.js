const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: String,
    data: Date,
    total: Number,
    status: String
});

class Pedido {
    constructor() {
        this.model = mongoose.model('Pedido', pedidoSchema);
    }

    async criarPedido(pedido) {
        const novoPedido = new this.model(pedido);
        return await novoPedido.save();
    }

    async listarPedidos() {
        return await this.model.find();
    }

    async atualizarPedido(id, pedido) {
        return await this.model.findByIdAndUpdate(id, pedido, { new: true });
    }

    async deletarPedido(id) {
        return await this.model.findByIdAndRemove(id);
    }
}

module.exports = Pedido;
