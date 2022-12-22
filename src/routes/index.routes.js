// Conector de rutas

const { Router } = require('express')

const pacientesRoutes = require("./pacientes.routes")
const medicosRoutes = require("./medicos.routes")
const tratamientosRoutes = require("./tratamientos.routes")
const usuariosRoutes = require("./usuarios.routes")
const authRoutes = require("./auth.routes")
const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
    const router = Router()

    router.use("/pacientes", pacientesRoutes)

    router.use("/medicos", medicosRoutes)

    router.use("/tratamientos", tratamientosRoutes)

    router.use("/usuarios", decodeJWT, usuariosRoutes)

    return router

}

const rutas_auth = () => {
    const router = Router()

    router.use("/auth", authRoutes)

    return router
}

module.exports = { rutas_init, rutas_auth }