class AuthorizationController {
  async loginUser(req, res, next) {
    const { email, password } = req.body;

    
  }

  async validateUser(req, res, next) {
    
  }
}

module.exports = new AuthorizationController();