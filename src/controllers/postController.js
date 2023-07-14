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

const updatePost = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const post = await postService.updatePost({ ...body, postId: id, userId: req.user });
    if (post.message) return res.status(401).json({ message: post.message });
    return res.status(200).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = await postService.deletePost({ postId: id, userId: req.user });
    if (post && post.message) return res.status(post.status).json({ message: post.message });
    return res.status(204).end();
};

const getPostsBySearch = async (req, res) => {
    const { q } = req.query;
    const posts = await postService.getPostsBySearch({ search: q });
    return res.status(200).json(posts);
};

module.exports = {
    createPost,
    getPosts,
    getPostsById,
    updatePost,
    deletePost,
    getPostsBySearch,
};