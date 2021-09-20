const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {validateJWT} = require('./auth/validateJWT')
const userController = require('./controller/userController');

app.use(bodyParser.json());

app.post('/login', userController.login);
app.get('/users/me', validateJWT, userController.getUser);
app.get('/top-secret', validateJWT, userController.topScret);

app.listen('8080', () => console.log('aplicação rodano na porta 8080'));