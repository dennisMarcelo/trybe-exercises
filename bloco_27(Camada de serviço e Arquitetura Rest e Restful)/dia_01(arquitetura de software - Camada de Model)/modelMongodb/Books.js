const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllBooks = async() => {
  const db = await connection()

  const books = await db.collection('books')
    .find({},{"_id": 0, "title": 1}).toArray();

  return  books;
}

const getByAuthorId = async(id) => {
  const db = await connection()

  const books = await db.collection('books')
    .findOne({"_id": ObjectId(id)});

  if (!books) return null;

  console.log(books);
  return  books;
}

module.exports = {
  getAllBooks,
  getByAuthorId
}