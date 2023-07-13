module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
'PostCategory', 
    { postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true } },
{ timestamps: false,
        tableName: 'posts_categories',
        underscored: true },
);

PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId' });
    models.Category.belongsToMany(models.BlogPost, { as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId' });
}; return PostCategory;
};