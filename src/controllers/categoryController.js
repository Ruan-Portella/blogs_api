const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.createCategory(name);
    return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
};