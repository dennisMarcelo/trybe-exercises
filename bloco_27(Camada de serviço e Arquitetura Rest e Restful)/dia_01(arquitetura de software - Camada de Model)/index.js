const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { getAll, AuthorCreat } = require('./modelMongodb/Author');
const {getAllBooks, getByAuthorId} = require('./modelMongodb/Books')
const bodyParser = require('body-parser')

app.use(bodyParser.json());

// authors
app.get('/authors', async(_req, res) => {
  const authors = await getAll();

  res.status(200).json(authors)
})

app.post('/authors', async(req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  
  await AuthorCreat(first_name, middle_name, last_name);
  res.status(201).json({ message: 'Autor criado com sucesso! '});
})


// books
app.get('/books', async(_req, res) => {
  const books = await getAllBooks();

  res.status(200).json(books)
})

app.get('/books/search', async(req, res) => {
  const {author_id} = req.query;
 
  const books = await getByAuthorId(author_id);
  
  res.status(200).json(books);
})


app.listen(PORT, () => {
  console.log(`Ouvido porta ${PORT}`)
})