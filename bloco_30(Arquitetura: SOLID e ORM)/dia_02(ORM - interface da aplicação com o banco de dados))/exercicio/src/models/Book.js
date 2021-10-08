'use strict';
const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
    },
    {
      underscored: true,
      tableName: 'books',
    }
  )

  return Book;
}

module.exports = Book;




// forma alternativa utilizando class:
/*
  const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class book extends Model {};

    book.init(
      {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
      }, 
      {
        sequelize,
        modelName: 'book',
        tableName: 'Book',
      }
    );

    return book;
  };
*/