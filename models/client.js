'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {
      // define association here
      Client.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Client.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    home_address: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    phone_no: DataTypes.BIGINT,
    city: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};