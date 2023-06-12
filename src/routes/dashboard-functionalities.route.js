const { Router } = require('express');
const DashboardFunctionalitiesController = require('../controllers/DashboardFunctionalitiesController');

const dashboardFunctionalitiesRoute = Router();

dashboardFunctionalitiesRoute.get('/listaccountmovement', DashboardFunctionalitiesController.listAllAccountMovements);
dashboardFunctionalitiesRoute.post('/createdepositordebits', DashboardFunctionalitiesController.createDepositOrDebits);
dashboardFunctionalitiesRoute.put('/updateBaskStatement', DashboardFunctionalitiesController.updateBankStatement);
dashboardFunctionalitiesRoute.delete('/removedepositordebits', DashboardFunctionalitiesController.removeDepositOrDebits);

module.exports = dashboardFunctionalitiesRoute;