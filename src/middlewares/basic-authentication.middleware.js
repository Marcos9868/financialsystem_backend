const userRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');
const secretKey = 'oshdaiusdoashdasuhdoasd';

async function authenticateUser(email, password) {
  const user = await userRepository.findByEmailAndPassword(email, password)

  if (!user) {
    return null;
  }

  const token = jwt.sign({ id: toString(user.id) }, secretKey, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ id: toString(user.id) }, secretKey, { expiresIn: '3h' })

  return { token, refreshToken };
}

async function validateToken(token) {
  if (!token) {
    return res.status(401).send({ message: 'Token não fornecido' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Token inválido' });
    }

    // Adiciona o ID do usuário ao objeto de solicitação para uso posterior
    req.userId = decoded.id;
    next();
  });
}

module.exports = { authenticateUser, validateToken }