const server = require("./server/server");
const usersRoute = require('./routes/users.route');
const authorizationRoute = require('./routes/authorization.route');
const dashboardFunctionalitiesRoute = require("./routes/dashboard-functionalities.route");

server.use(authorizationRoute)
server.use(usersRoute);
server.use(dashboardFunctionalitiesRoute);
