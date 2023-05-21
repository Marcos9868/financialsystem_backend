const userRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');
const secretKey = 'oshdaiusdoashdasuhdoasd';

function authenticateUser(email, password) {
  const user = userRepository.findByEmailAndPassword(email, password)

  if (!user) {
    return null;
  }

  const token = jwt.sign({ id: toString(user.id) }, secretKey);

  return token;
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

exports = { authenticateUser, basicAuthetication }

