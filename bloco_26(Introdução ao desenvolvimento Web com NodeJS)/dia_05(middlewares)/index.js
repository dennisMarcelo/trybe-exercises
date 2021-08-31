const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/auth-middleware')

//middleware que transforma dados do front compriencivel para o back.
app.use(bodyParser.json());


// Perceba que essa rota não vai pegar o middleware.
app.get('/open', function (req, res) {
  res.send('open!')
});


// O app.use só afeta as rotas que vem abaixo da sua definição
app.use(authMiddleware)


// Utilizando o Router
// para as rotas de drinks ficarem visiveis é preciso importalas para o index.
// Perceba que ela se tornou um middleware!
const drinks = require('./drinks');
app.use('/drinks', drinks)


//Trantando rotas que não Existem
// essa rota tem que ir por ultimo para não dar problema nas outras
app.all("*", (req, res) => res.status(404).json({message: `Rota '${req.path}' não existe!`}))



app.listen(3001, (req, res)=>{
console.log('aplicação ouvindo na porta 3001')
});

