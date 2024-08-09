// src/routes/produtoRoute.js

const express = require('express');
const router = express.Router();
const Produto = require('../models/produtoModel');

// Instância da classe Produto
const produtoService = new Produto();

// Criar um produto
router.post('/', async (req, res) => {
    try {
        await produtoService.criarProduto(req.body);
        res.status(201).send({ message: 'Produto criado com sucesso!' });
    } catch (error) {
        res.status(400).send({ message: 'Erro ao criar produto' });
        console.log(error);
    }
});

// Listar todos os produtos
router.get('/', async (req, res) => {
    try {
        const produtos = await produtoService.listarProdutos();
        res.send(produtos);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao listar produtos' });
    }
});

// Buscar um produto por ID
router.get('/:id', async (req, res) => {
    try {
        const produto = await produtoService.model.findById(req.params.id);
        if (!produto) {
            res.status(404).send({ message: 'Produto não encontrado' });
        } else {
            res.send(produto);
        }
    } catch (error) {
        res.status(500).send({ message: 'Erro ao buscar produto' });
    }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
    try {
        const produto = await produtoService.atualizarProduto(req.params.id, req.body);
        if (!produto) {
            res.status(404).send({ message: 'Produto não encontrado' });
        } else {
            res.send({ message: 'Produto atualizado com sucesso!' });
        }
    } catch (error) {
        res.status(400).send({ message: 'Erro ao atualizar produto' });
    }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
    try {
        await produtoService.deletarProduto(req.params.id);
        res.send({ message: 'Produto deletado com sucesso!' });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao deletar produto' });
    }
});

module.exports = router;
