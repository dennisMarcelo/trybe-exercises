const connection = require('./connection');

//Não esqueça o connection é assincrono
const getAll = async() => {
  // é preciso desestruturar porque junto com os dados vem informações sobre a requisição ao banco.
  const [authors]  = await connection.execute(
    `
    SELECT 
      id, 
      first_name AS firstName,
      middle_name AS middleName,
      last_name AS lastName,
      concat(first_name, ' ', COALESCE(middle_name, ''), ' ', last_name) AS fullName
    FROM
      authors;
    `
  )//.then(data => data[0])   Eu posso utilizar dessa forma tbm
    
  return authors;
};


const AuthorCreat = async(first_name, middle_name, last_name) => {
  connection.execute(
    `
      INSERT INTO authors(first_name, middle_name, last_name)
      VALUES(?,?,?)
    `,
    [first_name, middle_name, last_name]
  )
}

module.exports = {
  getAll,
  AuthorCreat
}