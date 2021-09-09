const Joi = require('joi');
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


const createCep = (req, res, next) => {
  try {
    const {error} = Joi.object({
      cep: Joi.string().not().empty().required(), 
      logradouro: Joi.string().not().empty().required(), 
      bairro: Joi.string().not().empty().required(), 
      localidade: Joi.string().not().empty().required(),
      uf: Joi.string().not().empty().required()
    }).validate(req.body) 
    
    if(error) return next({ "code": "invalidData", "message": error.details[0].message });

    const {cep, logradouro, bairro, localidade, uf} = req.body;

    if(!validCep(cep)) return next({ "code": "invalidData", "message": "CEP inválido" });

    cepService.createCep(cep, logradouro, bairro, localidade, uf);

    res.status(201).json({cep, logradouro, bairro, localidade, uf});
  }catch(err) {
    return next({ code: "InternalServerError", message: err.message});
  }
}

module.exports = {
  findCep,
  createCep
}