const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const cepController = require('./controllers/cepControler');
const errorMiddleware = require('./middlewares/errorMiddleware'); 

// config
app.use(bodyParser.json());
require('dotenv').config();
const PORT = process.env.PORT || 3005;


//routs
app.get('/ping', (req, res) => {
  res.status(200).json({ "message": "pong!" });
}) 

app.get('/cep/:cep', cepController.findCep);
app.post('/cep', cepController.createCep);

app.use(errorMiddleware)
app.listen(PORT, () =>{
  console.log(`ouvido a porta ${PORT}`);
})