const connection = require('./connection');


const projection = {
  "_id": 0,
  "firstName": 1,
  "middleName": 1,
  "lastName": 1,
  "fullName": {
    $concat: [
      "firstName",
      " ",
      {$ifNull: ["$middleName", ""]},
      " ",
      "lastName"
    ]
  }
}

const getAll = async() => {
  const db = await connection();

  const authors = await db.collection('authors').find({}, projection).toArray();

  return authors;
};


const AuthorCreat = async(firstName, middleName, lastName) => {
  const db = await connection();
  
  await db.collection('authors').insertOne({firstName, middleName, lastName})
}

module.exports = {
  getAll,
  AuthorCreat
}