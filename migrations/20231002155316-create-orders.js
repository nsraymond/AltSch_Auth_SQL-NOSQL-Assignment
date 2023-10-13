'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.STRING
      },
      order_number: {
        type: Sequelize.STRING
      },
      delivery_fee: {
        type: Sequelize.STRING
      },
      payment_status: {
        type: Sequelize.STRING
      },
      shipping_city: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};