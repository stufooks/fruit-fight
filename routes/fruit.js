const express = require('express')
const router = express.Router()
const fruitController = require('../controllers/fruit')

router.get('/', fruitController.index)

module.exports = router