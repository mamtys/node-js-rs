const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`Cluster ${process.pid} is running on http://localhost:${PORT}`)
);
