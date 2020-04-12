const { PORT } = require('./common/config');
// const cluster = require('cluster');
// const numCPUs = 2;
const app = require('./app');

// put it when having real db
// if (cluster.isMaster) {
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
// } else {
app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
// }
