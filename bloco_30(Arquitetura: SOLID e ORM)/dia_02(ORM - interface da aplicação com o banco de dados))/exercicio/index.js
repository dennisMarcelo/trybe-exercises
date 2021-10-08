const express = require('express');
const bodyParser = require('body-parser');

const bookController = require('./src/controllers/bookController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/book', bookController)

app.listen(PORT, () => console.log('Ouvindo na porta'+ PORT))

module.exports = app;