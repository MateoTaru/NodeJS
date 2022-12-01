// ruta de los Tratamientos

const router = require("express").Router()

const tratamientoController = require('../controllers/tratamiento.controller')

router.post('/', tratamientoController.crear)
router.get('/', tratamientoController.listar)

router.get('/:idTratamiento', tratamientoController.listarInfo)

module.exports = router