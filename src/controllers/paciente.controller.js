// Controlador de Pacientes

module.exports = {

    crear: async (req, res) => {
        try{
            console.log('ejecutandose Crear paciente')

            res.json({
                message: "Se creo exitosamente el Paciente"
            })

        } catch (err) {
            console.log(err);
        }

    },

    listar: async (req, res) => {
        try{
            console.log('ejecutandose Listar pacientes')

            res.json({
                message: "Listado de pacientes"
            })

        } catch (err) {
            console.log(err);
        }


    },

    listarInfo: async (req, res) => {
        try{
            const id=req.params.idPaciente

            console.log('ejecutandose Listado de pacientes', id)

            res.json({
                message: "Informacion del paciente: " + id
            })

        } catch (err) {
            console.log(err);
        }

    }


}