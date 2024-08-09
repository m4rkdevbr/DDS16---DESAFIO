const PedidoService = require('../services/pedidoService');

class PedidoController {
    async listPedidos(req, res) {
        try {
            const pedidos = await PedidoService.listPedidos();
            res.json(pedidos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar pedidos.' });
        }
    }

    async createPedido(req, res) {
        try {
            const pedido = await PedidoService.createPedido(req.body);
            res.json(pedido);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar o pedido.' });
        }
    }

    async buscarPedidoPorId(req, res) {
        try {
            const pedido = await PedidoService.buscarPedidoPorId(req.params.id);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado.' });
            }
            res.json(pedido);
        } catch (error) {
            res.status(500).json({ error: 'Falha ao buscar pedido.' });
        }
    }

    async atualizarPedido(req, res) {
        try {
            const pedido = await PedidoService.atualizarPedido(req.params.id, req.body);
            if (!pedido) {
                return res.status(404).json({ error: 'Pedido não encontrado.' });
            }
            res.status(peido);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar o pedido.' });
        }
    }

    async deletarPedido(req, res) {
        try {
            const result = await PedidoService.deletarPedido(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Pedido não encontrado.' });
            }
            res.json({ message: 'Pedido deletado.' })
        } catch (error) {
            res.status(500).json({ error: 'Falha ao deletar o pedido.' })
        }
    }
}

module.exports = new PedidoController();