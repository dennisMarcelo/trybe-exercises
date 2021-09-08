const validCep = require('../helpers/validCep')

const findCep = (req, res, next) => {
  const { cep } = req.params;
  if(validCep(cep)) {
    res.status(200).json({message: 'sucess'})
  } else {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } })
  }
}

module.exports = {
  findCep
}