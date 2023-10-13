'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {

    static associate(models) {
      // define association here
      products.belongsTo(models.categories, {
        foreignKey: 'category_id',
        as: 'categories',
      });
      products.belongsTo(models.Client, {
        foreignKey: 'client_id',
        as: 'Client',
      });
    }
  }
  products.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    size: DataTypes.STRING,
    unit: DataTypes.STRING,
    description: DataTypes.STRING,
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};