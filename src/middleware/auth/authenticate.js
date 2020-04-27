const passport = require('koa-passport');

module.exports = (strategy, cb) => async (ctx, next) => {
  await passport.authenticate(strategy, { session: false }, cb)(ctx, next);
};
