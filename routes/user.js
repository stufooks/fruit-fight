const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/login', userController.showLogin)
router.post('/login', userController.createLogin)
router.get('/signup', userController.showSignup)
router.post('/signup', userController.createSignup)

module.exports = router