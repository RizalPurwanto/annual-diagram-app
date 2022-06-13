"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Income.init(
    {
      month: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "month required",
          },
          notNull: {
            msg: "month cannot be null",
          },
        },
      },

      income: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "income is required",
          },
          notNull: {
            msg: "income cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Income",
    }
  );
  return Income;
};
