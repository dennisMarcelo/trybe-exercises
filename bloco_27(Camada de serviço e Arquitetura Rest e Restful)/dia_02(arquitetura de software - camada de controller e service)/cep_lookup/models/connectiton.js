const mysql = require('mysql2/promise');

const connetion = mysql.createPool(
  {
    user: 'dennis',
    password: 'ppk24.bat',
    host:'localhost',
    database: 'cep_lookup'
  }
)

module.exports = connetion;