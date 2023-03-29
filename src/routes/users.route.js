const { Router } = require('express');
const userController = require('../controllers/UserController');

const usersRoute = Router();

usersRoute.get('/users', userController.listUsers);
usersRoute.get('/users/:id', userController.showUser);
usersRoute.post('/users', userController.createUser);
usersRoute.put('/users/:id', userController.updateUser);
usersRoute.delete('/users/:id', userController.removeUser);

module.exports = usersRoute;