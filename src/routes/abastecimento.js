const express = require('express')
const router  = express.Router()
const controller = require('../controllers/abastecimento')

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)

module.exports = router
