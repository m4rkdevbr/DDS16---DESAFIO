const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { check, validationResult } = require('express-validator');
const { verifyToken } = require('../utils/jwt');

// Validação de dados
const validateRegister = [
    check('nome').not().isEmpty().withMessage('Nome é obrigatório'),
    check('email').isEmail().withMessage('E-mail inválido'),
    check('senha').not().isEmpty().withMessage('Senha é obrigatória'),
];

const validateLogin = [
    check('email').isEmail().withMessage('E-mail inválido'),
    check('senha').not().isEmpty().withMessage('Senha é obrigatória'),
];

const validateRedefinirSenha = [
    check('email').isEmail().withMessage('E-mail inválido'),
    check('senha_antiga').not().isEmpty().withMessage('Senha antiga é obrigatória'),
    check('senha_nova').not().isEmpty().withMessage('Senha nova é obrigatória'),
];

router.get('/', verifyToken, UserController.getUserProfile);
router.put('/', verifyToken, UserController.updateUserProfile);

router.post('/', validateRegister, UserController.register);
router.post('/login', validateLogin, UserController.login);
router.post('/redefinir', validateRedefinirSenha, UserController.redefinirSenha);

// Middleware de erro
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Erro interno' });
});

module.exports = router;
