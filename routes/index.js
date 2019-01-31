const express = require('express')
const router = express.Router()

router.use('/', require('./app'))
router.use('/fruit', require('./fruit'))
router.use('/comment', require('./comment'))
router.use('/user', require('./user'))

router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router