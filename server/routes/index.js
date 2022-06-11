const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");

const auth = require("./auth");
const income = require("./income");

router.use("/", auth);
router.use(authentication);

router.use("/income", income);

module.exports = router;
