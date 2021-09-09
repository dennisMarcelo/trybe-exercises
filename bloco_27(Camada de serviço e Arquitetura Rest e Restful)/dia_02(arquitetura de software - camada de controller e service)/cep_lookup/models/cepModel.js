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

  }catch (err) {
    return {code: 'InternalServerError', message: err.message };
  
  };
  
};

module.exports = {findCep};