const Joi = require('joi');
const jwt = require('jsonwebtoken');

const userModel = require('../model/userModel');

const login = (req, res, next) => {
  const {error} = Joi.object({
    username: Joi.string().min(5)
      .not().empty()
      .required(),
    password: Joi.string().min(5)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .not().empty()
      .required()
  }).validate(req.body);

  if (error) {
    return res.status(422).json({code:'invalid data', message: error.details[0].message});
  }
  
  const {username, password} = req.body;
  const userDB = userModel.getUser(username);
 
  if(!userDB) return res.status(404)
    .json({code:'not found', message: 'usuário não encontrado'});

  if(userDB.username !== username || userDB.password !== password) {
    return res.status(401).json({code:'Não autorizado', message: 'usuário ou senha inválidos'})
  };

  // projeto real utilizar vaiável de ambiente
  const secreteKey = 'senha super segura'
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({data:userDB}, secreteKey, jwtConfig);

  res.status(200).json({username, token: token });
};

const getUser = (req, res) => {
  const {username, admin} = req.user;
  
  res.status(200).json({username, admin});
}

const topScret = (req, res) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
}

module.exports = {
  login,
  getUser,
  topScret
}