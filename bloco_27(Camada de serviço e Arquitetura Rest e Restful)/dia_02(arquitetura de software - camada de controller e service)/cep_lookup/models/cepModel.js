const connection = require('./connectiton');

const findCep = async (cepFind) => {
  try {
    const [cep] = await connection.execute(
      `
        SELECT *
        FROM ceps
        WHERE cep = ${cepFind}
        LIMIT 1;
      `
    )
    return cep[0]
a
  }catch (err) {
    return {code: 'InternalServerError', message: err.message };
  
  };
};

const createCep = async(cep, logradouro, bairro, localidade, uf) => {
  try{
    const response = await connection.execute(
      `
      insert into ceps(cep, logradouro, bairro, localidade, uf)
      values (?, ?, ?, ?, ?)
      `,
      [cep, logradouro, bairro, localidade, uf]
    )

    if(response[0].affectedRows > 0){
      return true;
    }else{
      return false;
    }

  }catch (err) {
    return {code: 'InternalServerError', message: err.message };
  }
}

module.exports = {findCep, createCep};