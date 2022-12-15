// Controlador de Tratamientos

const models = require('../database/models/index');

module.exports = {

    crear: async (req, res) => {
        try{
            console.log('ejecutandose Crear Tratamiento')

            res.json({
                message: "Se creo exitosamente el Tratamiento"
            })

        } catch (err) {
            console.log(err);
        }

    },

    listar: async (req, res) => {
        try{
            console.log('ejecutandose Listar Tratamientos')

            res.json({
                message: "Listado de Tratamientos"
            })

        } catch (err) {
            console.log(err);
        }

    },

    listarInfo: async (req, res) => {
        try{
            const id=req.params.idTratamiento

            console.log('ejecutandose listar Tratamiento ', id)

            res.json({
                message: "Informacion del Tratamientos: " + id
            })

        } catch (err) {
            console.log(err);
        }

    }


}