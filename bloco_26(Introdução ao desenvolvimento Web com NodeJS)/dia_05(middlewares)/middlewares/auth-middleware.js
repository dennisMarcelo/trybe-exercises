const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'dennis', password: 'supersenha' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }
  
  const foundUser = validUsers.find((user)=> user.username === username)
  
  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });
  
  if (!(username === foundUser.username && password === foundUser.password)) {
    return res.status(401).json({ message: 'Password Invalid!' });
  }

  // Da para enviar valores entre middlewares com o objeto 'req.'
  req.user = foundUser;
  next();
};

module.exports = authMiddleware;