"use strict";
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./data/income.json"));

module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    return queryInterface.bulkInsert("Incomes", data)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Incomes", null);
  },
};
