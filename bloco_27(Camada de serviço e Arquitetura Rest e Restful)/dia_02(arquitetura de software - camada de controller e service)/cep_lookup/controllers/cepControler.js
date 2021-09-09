const validCep = require('../helpers/validCep')
const cepService = require('../services/cepService');


const findCep = async (req, res, next) => {
  const { cep } = req.params;
  
  if(!validCep(cep)) 
    return next({ "code": "invalidData", "message": "CEP inválido" })
  
  
  const response = await cepService.findCep(cep);
  if(response.code)
    return next(response)

  
  res.status(200).json(response)
}

module.exports = {
  findCep
}