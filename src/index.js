const server = require("./server/server");
const usersRoute = require('./routes/users.route');

server.use(usersRoute);