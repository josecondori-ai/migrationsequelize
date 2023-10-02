'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users',{
    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:Sequelize.INTEGER
    },
    nombre:{
      type:Sequelize.STRING,
      allowNull:false
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false
    },
    createAt:{
      type:Sequelize.DATE,
      allowNull:false
      },
      updateAt:{
        type:Sequelize.DATE,
      allowNull:false
      }
   })
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('users');
    
  }
};
