"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Employee must have a first name" },
          notEmpty: { msg: "First name must not be empty" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Employee must have a last name" },
          notEmpty: { msg: "Last name must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Employee must have a email" },
          notEmpty: { msg: "Email must not be empty" },
          isEmail: { msg: "Must be a valid email address" },
        },
      },
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "employee",
      modelName: "Employee",
    }
  );
  return Employee;
};
