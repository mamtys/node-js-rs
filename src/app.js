const Koa = require('koa');
const helmet = require('koa-helmet');

const router = require('./middleware/router');
const swagger = require('./middleware/swagger');
const { appLogger, httpLogger } = require('./middleware/logger');
const errorProppagation = require('./middleware/errorPropagation');

const app = new Koa();

app.use(errorProppagation);

app.use(helmet());
app.use(httpLogger);
app.use(router);
app.use(swagger);

app.use(async ctx => {
  ctx.status = 404;
  ctx.body = {
    message: 'Page Not Found'
  };
});

app.on('error', err => {
  appLogger.error(err.message);
});

module.exports = app;
