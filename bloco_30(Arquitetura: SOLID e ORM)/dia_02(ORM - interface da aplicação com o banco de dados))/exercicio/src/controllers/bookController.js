const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    res.status(200).json(allBooks)

  }catch(err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' })
    
  }
})
// falta terminar as rotas do exercicio do dia.

module.exports = router;