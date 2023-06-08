const express = require('express')
const router  = express.Router()
const controller = require('../controllers/produto')
const upload = require("../config/multer")

router.post('/', upload.single('file'), controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
router.delete('/', controller.deleteAll)

module.exports = router
