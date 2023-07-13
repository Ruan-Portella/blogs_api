const postRoute = require('express').Router();
const postController = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost');
const validatePostUpdated = require('../middlewares/validatePostUpdated');
const validateToken = require('../middlewares/validateToken');

postRoute.post('/', validateToken, validatePost, postController.createPost);
postRoute.get('/', validateToken, postController.getPosts);
postRoute.get('/:id', validateToken, postController.getPostsById);
postRoute.put('/:id', validateToken, validatePostUpdated, postController.updatePost);

module.exports = postRoute;
