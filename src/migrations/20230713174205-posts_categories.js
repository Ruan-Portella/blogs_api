/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: { type: Sequelize.INTEGER,
        allowNull: false,
        field: 'post_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'blog_posts', key: 'id' },
        primaryKey: true,
      },
      categoryId: { type: Sequelize.INTEGER,
        allowNull: false,
        field: 'category_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: { model: 'categories', key: 'id' },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};
