const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createPost = async ({ title, content, categoryIds, userId }) => {
    const categoryIdsMap = categoryIds.map((id) => Number(id));
    const verifyCategories = await Category.findAll({ where: { id: categoryIds } });

    if (categoryIdsMap.length !== verifyCategories.length) {
        return { message: 'one or more "categoryIds" not found' };
    }

    const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create({ title, content, userId }, { transaction: t });
      
        const postCategories = categoryIdsMap.map((categoryId) => PostCategory
        .create({ postId: post.id, categoryId }, { transaction: t }));
      
        await Promise.all(postCategories);
      
        return post;
      });

    const blogPost = await BlogPost.findOne({ where: { id: result.id } });

    return blogPost;
};

module.exports = {
    createPost,
};