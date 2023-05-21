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

async function basicAuthetication(req, res, next) {
  try {
    const authorizationHeader = req.headers['authorization']
    const token = authorizationHeader && authorizationHeader.split(' ')[1];
    
    if(!token) {
      return res.status(401).send({ message: 'Token not found' });
    }

    const decodedToken = jwt.verify();
    next()

  } catch (error) {
    next(error)
  }
}

module.exports = authenticateUser;