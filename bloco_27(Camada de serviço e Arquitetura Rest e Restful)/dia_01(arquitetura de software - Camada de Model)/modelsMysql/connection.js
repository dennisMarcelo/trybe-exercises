const mysql  = require('mysql2/promise')

// O método createPool retorna um objeto Pool representando uma sessão com o banco.
// Isto é, ele 'reaproveita a conexão' com o banco em outras requisições ao banco.
const connection = mysql.createPool(
  {
    user: 'dennis',
    password: 'ppk24.bat',
    host: 'localhost', // local onde o servidor do MySQL está armazenado
    database: 'model_example'
  }
)

module.exports = connection;