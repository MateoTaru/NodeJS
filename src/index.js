// Configuracion API
const express = require('express')

const globalConstants = require('./const/globalConstants')
const routerConfig = require('./routes/index.routes')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    return;
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())
    app.use('/', routerConfig.rutas_auth())

    app.use(function (req, res, next) {
        next(createError(404))
    })
    app.use(errorHandler)
}

const init = () => {
    const app = express()// crea instancia de EXPRESS
    configuracionApi(app)//configuracion API

    configuracionRouter(app)

    app.listen(globalConstants.PORT)
    console.log('La aplicacion se esta ejecutando en el puerto: ' + globalConstants.PORT)
}

init();
