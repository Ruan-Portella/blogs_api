const postService = require('../services/postService');

const createPost = async (req, res) => {
    const { body } = req;
    const post = await postService.createPost({ ...body, userId: req.user });
    if (post.message) return res.status(400).json({ message: post.message });
    return res.status(201).json(post);
};

const getPosts = async (_req, res) => {
    const posts = await postService.getPosts();
    return res.status(200).json(posts);
};

const getPostsById = async (req, res) => {
    const { id } = req.params;
    const post = await postService.getPostsById(id);
    if (post.message) return res.status(404).json({ message: post.message });
    return res.status(200).json(post);
};

module.exports = {
    createPost,
    getPosts,
    getPostsById,
};