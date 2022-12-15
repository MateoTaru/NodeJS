// Rutas de los Usuarios

const router = require("express").Router()

const usuarioController = require('../controllers/usuario.controller')

router.post('/', usuarioController.crear)
router.get('/', usuarioController.listar)

router.get('/:idUsuario', usuarioController.listarInfo)


module.exports = router