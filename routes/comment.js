const express = require('express')
const router = express.Router()
const commentContoller = require('../controllers/comment')

router.post('/', commentContoller.create)
router.get('/:id', commentContoller.show)
router.delete('/:id', commentContoller.delete)

module.exports = router