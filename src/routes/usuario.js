const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario');
const abastecimentoController = require('../controllers/abastecimento');

router.get('/abastecimento/:id', abastecimentoController.retrieveByCliente);
router.post('/', controller.create);
router.get('/', controller.retrieveAll);
router.delete('/', controller.deleteAll);
router.get('/:id', controller.retrieveOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
