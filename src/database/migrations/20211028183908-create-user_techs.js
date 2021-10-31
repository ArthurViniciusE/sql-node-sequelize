'use strict';

const sequelize = require("sequelize");

module.exports = {

  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('user_techs', { 
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
       },
       user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tech_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {model: 'techs', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
       created_at: {
         type: Sequelize.DATE,
         allowNull:false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.dropTable('user_techs');
  }
};
