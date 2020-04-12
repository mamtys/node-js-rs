const Koa = require('koa');
const helmet = require('koa-helmet');

const router = require('./middleware/router');
const swagger = require('./middleware/swagger');
const {
  appLogger,
  httpLogger,
  shutdown: shutdownLogger
} = require('./middleware/logger');
const errorProppagation = require('./middleware/errorPropagation');
const onError = require('./middleware/onError')(appLogger);
const onNotFound = require('./middleware/onNotFound');

const app = new Koa();

app.use(httpLogger);
app.use(errorProppagation);
app.use(helmet());
app.use(router);
app.use(swagger);

app.use(onNotFound);

app.on('error', onError);

process
  .on('unhandledRejection', (reason, p) => {
    appLogger.fatal(reason, p);
  })
  .on('uncaughtException', err => {
    console.log('err');
    appLogger.fatal(err);
    // eslint-disable-next-line no-process-exit
    shutdownLogger(() => process.exit(1));
  });

module.exports = app;
