'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'Dennis',
        email: 'dennis@test.com',
        // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
