const AuthRouter = require('express').Router();
const AuthController = require('../controllers/authController');
const validateEmailAndPass = require('../middlewares/validateEmailandPass');

AuthRouter.post('/login', validateEmailAndPass, AuthController.signIn);

module.exports = AuthRouter;