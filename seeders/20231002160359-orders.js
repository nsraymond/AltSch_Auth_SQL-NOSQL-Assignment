'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('orders', [{
       id: 1,
       order_date: '02-10-2023',
       order_number: '2255',
       delivery_fee: '$50',
       payment_status: 'paid',
       shipping_city: 'lagos',
       postal_code: '554441',
       product_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
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
