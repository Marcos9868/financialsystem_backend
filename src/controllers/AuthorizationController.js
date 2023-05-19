
class AuthorizationController {
  async loginUser(req, res, next) {
    const { email, password } = req.body;

    try {

      const user = await User.findOne({ email });
  
      if (!user) {

        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
  

      const isPasswordValid = await user.comparePassword(password);
  
      if (!isPasswordValid) {

        return res.status(401).json({ message: 'Senha inválida' });
      }
  
      const token = generateAuthToken(user);
  

      return res.status(200).json({ token });
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