const CategoryModel = require('../models/categoryModel');

class CategoryService {
    async listCategories() {
        return await CategoryModel.getAll();
    }

    async createCategory(categoryData) {
        return await CategoryModel.create(categoryData);
    }
}

module.exports = new CategoryService();
