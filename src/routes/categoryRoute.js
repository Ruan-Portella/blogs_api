const categoryRoute = require('express').Router();
const categoryController = require('../controllers/categoryController');
const validateCategoryName = require('../middlewares/validateCategoryName');
const validateTokenCategory = require('../middlewares/validateTokenCategory');

categoryRoute.post(
'/', 
validateCategoryName,
validateTokenCategory, 
categoryController.createCategory,
);

module.exports = categoryRoute;
