const globantConstants = require('../../const/globalConstants')


module.exports = {


  "development": {
    "username": globantConstants.DB_USERNAME,
    "password": globantConstants.DB_PASSWORD,
    "database": globantConstants.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
