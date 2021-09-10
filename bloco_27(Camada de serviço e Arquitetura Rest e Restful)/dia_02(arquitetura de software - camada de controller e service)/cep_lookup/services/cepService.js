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

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const cepWithoutTraction = cep.replace(/-/g, '');

  const cepExist = await cepModel.findCep(cepWithoutTraction);
 
  if (cepExist) return { "code": "alreadyExists", "message": "CEP já existente" };

  const response = await cepModel.createCep(cepWithoutTraction, logradouro, bairro, localidade, uf)
  return response;
}

module.exports = {
  findCep,
  createCep
};