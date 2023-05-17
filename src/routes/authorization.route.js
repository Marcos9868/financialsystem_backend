const { Router } = require('express');
const basicAuthetication = require('../middlewares/basic-authentication.middleware');
const authorizationController = require('../controllers/AuthorizationController');

const authorizationRoute = Router();

authorizationRoute.post('/login', basicAuthetication, authorizationController);
authorizationRoute.post('/validate', authorizationController);

module.exports = authorizationRoute;