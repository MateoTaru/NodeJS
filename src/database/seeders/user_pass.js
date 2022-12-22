// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "mateo",
                    apellido: "Taruschio",
                    email: "mateo@email.com",
                    edad: 25,
                    password: bcrypt.hashSync('password', 10)
                }
            }),
        ])
    },
};