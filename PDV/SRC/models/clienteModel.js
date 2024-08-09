// Importando o express
const express = require("express");

// Criando um novo router
const router = express.Router();

// Importando o controller de clientes
const clienteController = require("../controllers/clienteController");

// Importando o middleware de autenticação
const authMiddleware = require("../middlewares/authMiddleware");

// Definindo a rota para listar clientes
router.get("/", authMiddleware, clienteController.listarClientes);

// Exportando o router
module.exports = router;