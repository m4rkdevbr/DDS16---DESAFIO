//pedidoRoute.js
//rotas dos pedidos

const express = require("express");
const router = express.Router();

// Importando o controller de pedidos
const pedidoController = require("../controllers/pedidoController");

// Definindo as rotas de pedidos
router.get("/lista-de-pedidos", pedidoController.listPedidos);
router.get("/:id", pedidoController.buscarPedidoPorId);
router.post("/criar-pedido", pedidoController.createPedido);
router.put("/:id", pedidoController.atualizarPedido);
router.delete("/:id", pedidoController.deletarPedido);

module.exports = router;