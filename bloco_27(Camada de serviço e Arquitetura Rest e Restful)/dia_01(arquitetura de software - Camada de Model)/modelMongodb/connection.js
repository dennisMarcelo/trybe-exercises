const { MongoClient } = require('mongodb');
// useNewUrlParser e useUnifiedTopology dizem ao driver do mongodb como ele deve se conectar ao banco
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://localhost:27017'

let db = null;

// Aqui foi utilizado o padrão 'singleton'
// É como se eu estivesse utilizando o createPool() do mysql2.
const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then(connection => {
        db = connection.db('model_example');
        return db;
      })
};

module.exports = connection;