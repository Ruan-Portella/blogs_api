const postService = require('../services/postService');

const createPost = async (req, res) => {
    const { body } = req;
    const post = await postService.createPost({ ...body, userId: req.user });
    if (post.message) return res.status(400).json({ message: post.message });
    return res.status(201).json(post);
};

module.exports = {
    createPost,
};