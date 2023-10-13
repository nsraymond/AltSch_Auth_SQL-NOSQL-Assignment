'use strict';

const users = require('./20230929013336-user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const now = new Date();

      

      // Insert the client record
      const clientRecord = {
        id:2,
        first_name: 'Ray1',
        last_name: 'Edoz1',
        email_address: 'ray@gmail.com',
        home_address: 'lekki 2',
        postal_code: 245,
        phone_no: 72455666,
        city: 'Lagos',
        userId:1,
        createdAt: now,
        updatedAt: now,
      };

      await queryInterface.bulkInsert('Clients', [clientRecord]);

      console.log('Client record seeded successfully');
    } catch (error) {
      console.error('Error seeding Client records:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here if needed
    // Example: await queryInterface.bulkDelete('Admins', null, {});
  },
};