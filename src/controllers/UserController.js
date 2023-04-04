const User = require('../models/User');
const userRepository = require('../repositories/UserRepository');
const userView = require('../views/UserView');

class UserController {
  async createUser(req, res) {
    const { name, email, password, documentNumber } = req.body;
    const id = new Date().getTime();

    const newUser = new User(id, name, email, password, documentNumber);

    await userRepository.create(newUser);

    return userView.renderSuccess(res, { message: 'Cadastrado com sucesso' });
  }

  async listUsers(res) {
    const users = await userRepository.list();

    return userView.renderSuccess(res, users);
  }

  async showUser() {

  }

  async updateUser() {

  }

  async removeUser() {

  }
}

module.exports = new UserController();