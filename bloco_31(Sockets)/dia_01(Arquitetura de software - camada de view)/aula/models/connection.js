const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'dennis',
  password: 'ppk24.bat',
  database: 'mvc_example'
});

module.exports = connection;