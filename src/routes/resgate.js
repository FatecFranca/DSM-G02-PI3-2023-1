const express = require('express')
const router  = express.Router()
const controller = require('../controllers/resgate')

router.post('/', controller.create)

module.exports = router
