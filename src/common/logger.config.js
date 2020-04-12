module.exports = {
  appenders: {
    http: { type: 'file', filename: './log/http.log' },
    app: { type: 'file', filename: './log/app.log' },
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'all' },
    http: { appenders: ['http'], level: 'debug' },
    app: { appenders: ['app'], level: 'debug' }
  }
};
