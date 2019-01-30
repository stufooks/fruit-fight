const express = require('express')
const router = express.Router()
const fruitController = require('../controllers/fruit')

router.get('/', fruitController.index)
router.patch('/:id1/:id2', fruitController.update)

module.exports = router