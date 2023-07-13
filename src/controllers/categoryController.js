const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.createCategory(name);
    return res.status(201).json(category);
};

module.exports = {
    createCategory,
};