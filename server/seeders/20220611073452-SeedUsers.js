"use strict";
const fs = require("fs");
const bcrypt = require("bcryptjs");
let data = JSON.parse(fs.readFileSync("./data/users.json"));
const salt = bcrypt.genSaltSync(6);

module.exports = {
  async up(queryInterface, Sequelize) {
    data.forEach(el => {
      const hash = bcrypt.hashSync( el.password, salt)
      
      el.password = hash
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert("Users", data)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null)
  },
};
