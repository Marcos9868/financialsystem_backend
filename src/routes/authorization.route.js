const { Router } = require('express');
const authorizationController = require('../controllers/AuthorizationController');

const authorizationRoute = Router();

authorizationRoute.post('/login', authorizationController.loginUser);
authorizationRoute.get('/validate', authorizationController.validateUser);

module.exports = authorizationRoute;