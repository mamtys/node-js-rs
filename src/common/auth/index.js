const passport = require('koa-passport');
require('./jwt');
require('./local');

module.exports = {
  initialize: () => passport.initialize()
};
