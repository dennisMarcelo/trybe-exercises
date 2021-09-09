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

const createCep = (cep, logradouro, bairro, localidade, uf) => {
  const cepWithoutTraction = cep.replace(/-/g, '');

  cepModel.createCep(cepWithoutTraction, logradouro, bairro, localidade, uf)
}

module.exports = {
  findCep,
  createCep
};