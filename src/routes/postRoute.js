const postRoute = require('express').Router();
const postController = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

postRoute.post('/', validateToken, validatePost, postController.createPost);

module.exports = postRoute;
