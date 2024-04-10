'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('todos', [{
      content: 'John Doe',
      uuid:'76032294-8a62-4af0-9759-65f4526cdd7d',
      createdAt:'2024-04-10T05:41:13.577Z',
      updatedAt:'2024-04-10T05:41:13.577Z',

    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('todos', null, {});
  }
};
