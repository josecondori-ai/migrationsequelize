'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users',[
      {
        nombre:'juan miguel',
        email:'juan@gmail.com',
        createAt:new Date(),
        updateAt:new Date()
      },{
         nombre:'maria',
      email:'maria@gmail.com',
      createAt:new Date(),
      updateAt:new Date()
      },
      {
        nombre:'julia',
     email:'julia@gmail.com',
     createAt:new Date(),
     updateAt:new Date()
     }
     
     ],{})
    
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
