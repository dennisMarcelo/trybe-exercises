const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');

const BookModel = require('../src/models/Book');

describe('O model de book', ()=> {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('possui o nome book', ()=> {
    checkModelName(Book)('Book')
  })

  it('possui as propriedades "title", "author", "pageQuantity"', ()=> {
    ["title", "author", "pageQuantity"].forEach(checkPropertyExists(book));
  })
})