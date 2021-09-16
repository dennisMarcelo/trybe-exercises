const jwt = require('jsonwebtoken');
const model = require('../../models/user');

//Em projetos reais dever ser colocada em vaiáveis de ambiente. ELA É MUITO IMPORTANTE!
const secreteKey = 'seusecretdetoken';

module.exports = async (req, res, next)=> {
  const  token = req.headers['authorization'];

  // O token deve ser informado
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try{
    const decoded = jwt.verify(token, secreteKey);
    const user = await model.findUser(decoded.data.username)

    // verifica se existe usuário.
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;
    next();
  }catch(err){
    return res.status(401).json({ message: err.message });
  }
}