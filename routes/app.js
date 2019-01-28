const express = require('express')
const router = express.Router()
const appController = require('../controllers/app')

router.get('/', appController.show)
router.get('/leaderboard', appController.index)

module.exports = router