const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
