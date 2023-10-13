'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {

    static associate(models) {
      // define association here
      Admin.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

    }
  }
  Admin.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    homeAddress: DataTypes.STRING,
    permissions: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};