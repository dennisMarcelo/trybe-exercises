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

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.status(200).json(book)
  }catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.post('/', async (req, res) => {
  try{
    const newBook = req.body;
    const result = await Book.create(newBook)
    res.status(201).json(result)
  }catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const id  = req.params.id;
    const newBook = req.body;
    const [updateUser] = await Book.update(
      newBook,
      {where: { id }}
    );

    console.log(updateUser);
    res.status(200).json(updateUser)
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.destroy(
      { where: { id } },
    );
    
    res.status(200).json({message: 'successfully deleted book', result});
  } catch(err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})


module.exports = router;