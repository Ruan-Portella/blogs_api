/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.STRING },
      userId: { 
        type: Sequelize.INTEGER,
        allowNull: false, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        }, 
      },
      published: { type: Sequelize.DATE },
      updated: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  },
};
