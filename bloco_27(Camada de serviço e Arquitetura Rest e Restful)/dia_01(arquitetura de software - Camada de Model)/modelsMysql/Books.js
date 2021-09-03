const connection = require('./connection');

const getAllBooks = async() => {
  const [books] = await connection.execute(
    `
      SELECT id, title 
      FROM books;
    `
  )

  return  books
}

const getByAuthorId = async(id) => {
  const [books] = await connection.execute(
    `
      SELECT id, title
      FROM books
      WHERE author_id = ?
    `,
    [id]
  )

  if(books.length === 0)return null

  return books
}

module.exports = {
  getAllBooks,
  getByAuthorId
}