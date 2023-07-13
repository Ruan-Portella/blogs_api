const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmailAndPass = require('../middlewares/validateEmailandPass');

userRouter.post('/', validateEmailAndPass, validateDisplayName, userController.signUp);

module.exports = userRouter;