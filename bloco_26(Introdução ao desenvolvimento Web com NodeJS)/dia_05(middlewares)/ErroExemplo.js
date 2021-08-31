/* errorHandlerExample.js */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

// sem o try/catch a aplicação quebra e cai o servido node
app.get('/:fileName', async (req, res, next) => {
  try {
      const file = await fs.readFile(`./${req.params.fileName}`);
      res.send(file.toString('utf-8'));
  } catch (e) {
      next(e); 
  }
});


app.get('/rescue/:fileName', rescue(async (req, res, next) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
}));

app.use((err, _req, res, _next) =>{
  res.status(500).json({message: err.message});
})

app.listen(3002, (req, res)=>{
  console.log('aplicação ouvindo na porta 3002')
});