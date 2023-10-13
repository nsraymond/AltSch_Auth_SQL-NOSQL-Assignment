'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: 'watch',
        price: '$4.5',
        size: '63.1',
        unit: '5',
        description: 'trusted',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 2,
        name: 'apple',
        price: '$5',
        size: '0.1',
        unit: '2',
        description: 'sweet',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 3,
        name: 'pencil',
        price: '$3',
        size: '6.21',
        unit: '1',
        description: 'active',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 4,
        name: 'Television',
        price: '$3.45',
        size: '63.1',
        unit: '4',
        description: 'beautful',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 5,
        name: 'bag',
        price: '$4.5',
        size: '664',
        unit: '5',
        description: 'trusted',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 6,
        name: 'pineapple',
        price: '$4.5',
        size: '63.1',
        unit: '4',
        description: 'trusted',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 7,
        name: 'book',
        price: '$4.5',
        size: '63',
        unit: '5',
        description: 'trusted',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 8,
        name: 'bicycle',
        price: '$4.5',
        size: '63.1',
        unit: '5',
        description: 'trusted',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 9,
        name: 'bangle',
        price: '$4.5',
        size: '63.1',
        unit: '5',
        description: 'trusted',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
      {
        id: 10,
        name: 'chocolate',
        price: '$4.5',
        size: '63.1',
        unit: '5',
        description: 'yummy',
        category_id: 1,
        client_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
