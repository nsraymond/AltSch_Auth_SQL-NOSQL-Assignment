'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {

    static associate(models) {
      // define association here
      orders.belongsTo(models.products, {
        foreignKey: 'product_id',
        as: 'orders',
      });
    }
  }
  orders.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_date: DataTypes.STRING,
    order_number: DataTypes.STRING,
    delivery_fee: DataTypes.STRING,
    payment_status: DataTypes.STRING,
    shipping_city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};