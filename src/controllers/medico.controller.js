// Controlador de Medicos

const models = require('../database/models/index');

module.exports = {

    crear: async (req, res) => {
        try{
            console.log('ejecutandose crear medico')

            res.json({
                message: "Se creo exitosamente el medico"
            })

        } catch (err) {
            console.log(err);
        }

    },

    listar: async (req, res,) => {
        try{
            console.log('ejecutandose Listar medicos')

            res.json({
                message: "Listado de medicos"
            })

        } catch (err) {
            console.log(err);
        }

    },

    listarInfo: async (req, res) => {
        try{
            const id=req.params.idMedico

            console.log('ejecutandose Listado medicos', id)

            res.json({
                message: "Informacion del medico: " + id
            })

        } catch (err) {
            console.log(err);
        }

    }


}