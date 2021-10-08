'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'As Crônicas de Bugs e Códigos', 
          author: 'Dennis', 
          page_quantity: 8001,
          // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Quebrando a Cabeça e Consertando o código', 
          author: 'Dennis', 
          page_quantity: 1000, 
          // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
