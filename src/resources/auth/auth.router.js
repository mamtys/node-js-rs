/* eslint-disable require-atomic-updates */
// this rule works bad with koa, and just works bad btw https://github.com/eslint/eslint/issues/11899
const router = require('@koa/router')();
const generateToken = require('../../helpers/generateToken');
const bodyParser = require('koa-body');
const { authenticate } = require('../../middleware/auth');

router.post(
  'login',
  bodyParser(),
  async (ctx, next) =>
    await authenticate('local', (err, user) => {
      if (err || !user) ctx.throw(403);

      const token = generateToken(user.id);

      ctx.body = { user, token };
    })(ctx, next)
);

router.get('jwt', authenticate('jwt'), ctx => {
  ctx.body = { m: 'auth passed' };
});

module.exports = router.routes();
