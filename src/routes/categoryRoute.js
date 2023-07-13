const categoryRoute = require('express').Router();
const categoryController = require('../controllers/categoryController');
const validateCategoryName = require('../middlewares/validateCategoryName');
const validateToken = require('../middlewares/validateToken');
const validateTokenCategory = require('../middlewares/validateTokenCategory');

categoryRoute.post(
'/', 
validateCategoryName,
validateTokenCategory, 
categoryController.createCategory,
);
categoryRoute.get('/', validateToken, categoryController.getAllCategories);

module.exports = categoryRoute;
