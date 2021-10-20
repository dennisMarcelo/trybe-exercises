const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const TEST = process.env.TEST || 'NÃO ESTA FUNCIONANDO'
let cont = 1;

app.get('/', (req, res) => {
  console.log(cont+1);
  console.log('hello word!');
  res.status(200).send('Pong!');
})

app.get('/ping', (req, res) => {
  res.status(200).send('Pong 2! '+ TEST);
})

app.listen(PORT, () =>{ console.log('rodando na porta'+ PORT)})
