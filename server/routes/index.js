const express = require('express')
const router = express.Router()

const income = require('./income')

router.use('/income', income);

module.exports = router