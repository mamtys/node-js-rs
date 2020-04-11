const Koa = require('koa');

const router = require('./middleware/router');
const swagger = require('./middleware/swagger');
const app = new Koa();

app.use(router);
app.use(swagger);

module.exports = app;
