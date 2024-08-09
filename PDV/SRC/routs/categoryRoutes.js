const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');
const { verifyToken } = require('../utils/jwt');

router.get('/', CategoryController.listCategories);
router.post('/', verifyToken, CategoryController.createCategory);

module.exports = router;
