const express = require('express');
const app = express();

const cepController = require('./controller/cepControler');

require('dotenv').config();
const PORT = process.env.PORT || 3005;

app.get('/ping', (req, res) => {
  res.status(200).json({ "message": "pong!" })
}) 

app.get('/cep/:cep', cepController.findCep)

app.listen(PORT, () =>{
  console.log(`ouvido a porta ${PORT}`);
})