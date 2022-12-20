// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "node",
                    apellido: "JS",
                    email: "node@email.com",
                    edad: 25,
                    password: bcrypt.hashSync('password', 10)
                }
            }),
        ])
    },
};