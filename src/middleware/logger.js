const log4js = require('koa-log4');
const config = require('../common/logger.config');

log4js.configure(config);

const httpLogger = log4js.getLogger('http');
const appLogger = log4js.getLogger('app');
const consoleLogger = log4js.getLogger();

module.exports = {
  appLogger,
  consoleLogger,
  httpLogger: log4js.koaLogger(httpLogger, {
    level: 'auto',
    format: (ctx, format) => {
      return format(
        `:remote-addr - :method :status :url HTTP/:http-version ":referrer" ":user-agent" body:'${JSON.stringify(
          ctx.request.body
        ) || ''}' query:'${JSON.stringify(ctx.query)}' send:'${JSON.stringify(
          ctx.body
        )}'`
      );
    }
  }),
  shutdown: cb => log4js.shutdown(cb)
};
