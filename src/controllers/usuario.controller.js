// Controlador de Usuarios

const models = require('../database/models/index');

module.exports = {

    crear: async (req, res) => {
        try {
            const user = await models.usuario.create(req.body)

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listar: async (req, res) => {

        const user = await models.usuario.findAll()

        res.json({
            success: true,
            data: {
                usuarios: users
                
            }
        })

    },

    listarInfo: async (req, res, next) => {
        
        const user = await models.usuario.findOne({
            where: {
                id:req.params.idUsuario
            },attributes:{exclude:["password"]}
        })

        res.json({
            success: true,
            data: {
                usuario: user
            }
        })

    }


}