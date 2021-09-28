const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const TEST = process.env.TEST || 'NÃO ESTA FUNCIONANDO'

app.get('/', (req, res) => {
  res.status(200).send('Pong!');
})

app.get('/ping', (req, res) => {
  res.status(200).send('Pong 2! '+ TEST);
})

app.listen(PORT, () =>{ console.log('rodando na porta'+ PORT)})