const cepModel = require('../models/cepModel')

const findCep  = async(cepFind) => {
  const cepWithoutTraction = cepFind.replace(/-/g, '');
  const response = await cepModel.findCep(cepWithoutTraction);

  if(response) {
    return response;
  }else{
    return { "code": "notFound", "message": "CEP não encontrado" }
  }
}

module.exports = {
  findCep
};