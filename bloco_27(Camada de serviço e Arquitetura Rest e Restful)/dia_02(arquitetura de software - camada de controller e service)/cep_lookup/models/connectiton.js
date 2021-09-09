const mysql = require('mysql2/promise');
require('dotenv').config();

const nameUser = process.env.NAME_USER
const password = process.env.PASSWORD
const host = process.env.HOST_DATA
const database = process.env.DATABASE

const connetion = mysql.createPool(
  {
    user: nameUser,
    password,
    host,
    database,
  }
)

module.exports = connetion;