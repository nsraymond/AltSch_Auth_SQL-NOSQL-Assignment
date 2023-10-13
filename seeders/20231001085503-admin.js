'use strict';

const users = require('./20230929013336-user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const now = new Date();

      

      // Insert the Admin record associated with a User
      const adminRecord = {
        fullName: 'Ray Edozie',
        email: 'edoz@gmail.com',
        homeAddress: 'lekki',
        permissions: 'admin_role',
        userId: 1, // Use the ID of the user from your imported users array
        createdAt: now,
        updatedAt: now,
      };

      await queryInterface.bulkInsert('Admins', [adminRecord]);

      console.log('Admin record seeded successfully');
    } catch (error) {
      console.error('Error seeding Admin records:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here if needed
    // Example: await queryInterface.bulkDelete('Admins', null, {});
  },
};

console.log(users)
