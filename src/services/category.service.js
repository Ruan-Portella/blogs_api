const { Category } = require('../models');

const createCategory = async (name) => {
    const category = await Category.create({ name });
    return category;
};

module.exports = {
    createCategory,
};