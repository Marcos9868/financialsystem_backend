const userRepository = require('../repositories/UserRepository');


async function basicAuthetication(req, res, next) {
  try {
    const authorizationHeader = req.headers['authorization']
    console.log(authorizationHeader)

    if (!authorizationHeader) {
      throw new Error('Uninformed Credentials')
    }
    const [autheticationType, token] = authorizationHeader.split(' ')

    if (autheticationType !== 'Basic' || !token) {
      throw new Error('Invalid Authentication Type')
    }

    const tokenContent = Buffer.from(token, 'base64').toString('utf-8')

    const [email, password] = tokenContent.split(':')
    
    if (!email || !password) {
      throw new Error('Unfilled credentials')
    }

    const user = await userRepository.findByEmailAndPassword(email, password)

    if (!user) {
      throw new Error('Invalid useremaiil or password')
    }

    req.user = user
    
    next()

  } catch (error) {
    next(error)
  }
}

module.exports = basicAuthetication

