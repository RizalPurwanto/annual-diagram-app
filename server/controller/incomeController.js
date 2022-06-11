const { User, Income } = require("../models/index");

class Controller {
  static async getIncomes(req, res, next) {
    try {
      const incomes = await Income.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json(incomes);
    } catch (error) {
      
      next(error)
    }
  }
}

module.exports = Controller;
