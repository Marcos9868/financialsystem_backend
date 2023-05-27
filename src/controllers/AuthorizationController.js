const { authenticateUser, validateToken } = require('../middlewares/basic-authentication.middleware');
const AuthenticationView = require('../views/AuthenticationView');

class AuthorizationController {
  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await authenticateUser(email, password);

      if (!token) {
        res.status(401).send({ message: 'User not found' });
      }

      return res.status(200).send({ token });
    } catch (error) {
      return next(error);
    }
  }

  async validateUser(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const validate = validateToken(token);

    if (!validate) {
      return AuthenticationView.renderError(res, 400, { message: 'Token expired' });
    }

    return AuthenticationView.renderSuccess(res, { message: 'Token validated' });

  }

  async refreshUserToken(req, res, next) {

  }

  async logoutUser(req, res, next) {

  }
}

module.exports = new AuthorizationController();