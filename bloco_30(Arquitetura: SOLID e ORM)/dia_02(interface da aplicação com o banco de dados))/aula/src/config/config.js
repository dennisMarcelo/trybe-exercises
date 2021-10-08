require('dotenv').config();

module.exports = {
  development: {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  test: {
    username: 'null',
    password: 'null',
    database: 'null',
    host: 'null',
    dialect: 'mysql',
  },
  production: {
    username: 'null',
    password: 'null',
    database: 'null',
    host: 'null',
    dialect: 'mysql',
  },
};