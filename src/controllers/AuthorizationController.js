const JWT= require('jsonwebtoken')

class AuthorizationController {
  async loginUser(req, res, next) {
    try {

      const user = req.user;
  
      if (!user) {

        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const jwtPayLoad = { email: user.email, password: user.password }
      const jwtOptions = { subject: toString(user.id) }
      const secretKey = "123456"
      
      const jwt = JWT.sign(jwtPayLoad, secretKey, jwtOptions)
      
  

      return res.status(200).json({ token: jwt });
    } catch (error) {

      return next(error);
    }
    
  }

  async validateUser(req, res, next) {
    const { token } = req.body;

    try {

      if (!token) {
        return res.status(400).json({ message: 'Token de autenticação não fornecido' });
      }
  

      const decodedToken = verifyAuthToken(token);
  
      if (!decodedToken) {
        return res.status(401).json({ message: 'Token de autenticação inválido' });
      }
  

      const user = await User.findById(decodedToken.userId);
  
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
  

      req.user = user;
  

      next();
    } catch (error) {

      return next(error);
    }
  }
}

module.exports = new AuthorizationController();