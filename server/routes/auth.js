const Controller = require("../controller/authController");
const express = require("express");
const router = express.Router();

router.post('/login', Controller.login);

module.exports = router;
