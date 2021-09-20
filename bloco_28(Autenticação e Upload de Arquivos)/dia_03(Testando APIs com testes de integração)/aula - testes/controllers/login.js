const jwt = require('jsonwebtoken');
const User = require('../models/user');

//Em projetos reais dever ser colocada em vaiáveis de ambiente. ELA É MUITO IMPORTANTE!
const secreteKey = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password)
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });


  // Congiguração para o básica para o JWT
    // expiresIn -> significa o tempo pelo qual esse token será válido;
      // Utiliza formato descritivo: 8d = 8 dias, 8h = 8 horas.
    // algorithm -> algoritmo que você usará para assinar sua mensagem.
  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };
  
  // O user vem do banco de dados.
  const token = jwt.sign({data:user}, secreteKey, jwtConfig)

  return res.status(200).json({ message: 'logado', token: token});
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
