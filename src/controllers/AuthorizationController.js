const authenticateUser = require('../middlewares/basic-authentication.middleware');

class AuthorizationController {
  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await authenticateUser(email, password);
      
      if(!token) {
        res.status(401).send({ message: 'User not found' });
      }

      return res.status(200).send({ token });
    } catch (error) {
      return next(error);
    }
  }

  async validateUser(req, res, next) {
    try {
      const { token } = req.body;

      if (!token) {
        return res.status(400).json({ message: 'Token de autenticação não fornecido' });
      }
  
      const decodedToken = basicAuthentication(token);
  
      if (!decodedToken) {
        return res.status(401).json({ message: 'Token de autenticação inválido' });
      }
    } catch (error) {
      return next(error);
    }
  }

  async refreshValidation(req, res, next) {

  }

  async logoutUser(req, res, next) {

  }
}

module.exports = new AuthorizationController();