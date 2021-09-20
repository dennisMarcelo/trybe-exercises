const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel')

// na vida real isso deve ficar em uma varipável de ambiente.
const secreteKey = 'senha super segura'

const validateJWT = async (req, res, next) => {
  const token = req.headers['authorization'];

  if(!token) return res.status(401)
    .json({code:'Unauthorized', message: 'token não encontrado'});
  
  try{
    const decoded = jwt.verify(token, secreteKey);

    if (decoded.data.admin === true) {
      req.user = decoded.data
      next()
    
    } else{
      return res.status(401).json({
        code: 'Unauthorized',
        message: 'Essa rota só pode ser acessada por administradores.'
      })
    }

  } catch(err) {
    return res.status(401).json({code:'Unauthorized', message: err.message});
  }
  
}

module.exports = {
  validateJWT
}