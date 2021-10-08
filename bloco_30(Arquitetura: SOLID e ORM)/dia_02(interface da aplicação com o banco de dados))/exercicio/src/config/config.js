require('dotenv').config();

// em produção utilizar variáveis de ambiente
module.exports = {
  development: {
    username: "dennis",
    password: "ppk24.bat",
    database: "books_sequelize",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    usernam: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
