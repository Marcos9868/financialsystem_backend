const server = require("./server/server");
const usersRoute = require('./routes/users.route');
const authorizationRoute = require('./routes/authorization.route')

server.use(authorizationRoute)
server.use(usersRoute);
