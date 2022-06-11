const Controller = require("../controller/incomeController");
const express = require("express");
const router = express.Router();

router.get('/', Controller.getIncomes);

module.exports = router;
