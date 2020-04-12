module.exports = {
  appenders: {
    http: { type: 'file', filename: './log/http.log' },
    httpErrors: { type: 'file', filename: './log/httpError.log' },
    justErrors: {
      type: 'logLevelFilter',
      appender: 'httpErrors',
      level: 'error'
    },
    app: { type: 'file', filename: './log/app.log' },
    appFatal: { type: 'file', filename: './log/appFatal.log' },
    justFatal: {
      type: 'logLevelFilter',
      appender: 'appFatal',
      level: 'fatal'
    },
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'all' },
    http: { appenders: ['http', 'justErrors'], level: 'debug' },
    app: { appenders: ['app', 'justFatal', 'console'], level: 'debug' }
  }
};
