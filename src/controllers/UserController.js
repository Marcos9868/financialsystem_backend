const User = require('../models/User');
const userRepository = require('../repositories/UserRepository');
const userView = require('../views/UserView');

class UserController {
  async createUser(req, res) {
    const { name, email, password, documentNumber, status } = req.body;
    const id = new Date().getTime();

    const newUser = new User(id, name, email, password, documentNumber, status);

    await userRepository.create(newUser);

    return userView.renderSuccess(res, { message: 'Cadastrado com sucesso' });
  }

  async listUsers(req, res) {
    const users = await userRepository.list();

    return userView.renderUsers(res, users);
  }

  async showUser() {

  }

  async updateUser() {

  }

  async removeUser() {

  }
}

module.exports = UserController;