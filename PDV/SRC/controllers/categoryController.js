const CategoryService = require('../services/categoryService');

class CategoryController {
    async listCategories(req, res) {
        try {
            const categories = await CategoryService.listCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar categorias' });
        }
    }

    async createCategory(req, res) {
        try {
            const category = await CategoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar categoria' });
        }
    }
}

module.exports = new CategoryController();
