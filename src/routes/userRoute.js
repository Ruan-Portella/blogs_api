const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmailAndPass = require('../middlewares/validateEmailandPass');
const validateToken = require('../middlewares/validateToken');

userRouter.post('/', validateEmailAndPass, validateDisplayName, userController.signUp);
userRouter.get('/', validateToken, userController.getUsers);

module.exports = userRouter;