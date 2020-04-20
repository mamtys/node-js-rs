/* eslint-disable require-atomic-updates */
// this rule works bad with koa, and just works bad btw https://github.com/eslint/eslint/issues/11899

const router = require('@koa/router')();
const bodyParser = require('koa-body');
const userService = require('./user.service');
const filter = require('../../helpers/filterUndefined');

router.get('/', async ctx => {
  const user = await userService.getAll();
  ctx.body = user;
});

router.get('/:id', async ctx => {
  const user = await userService.getById(ctx.params.id);
  ctx.body = user;
});

router.post('/', bodyParser(), async ctx => {
  const user = await userService.create(filter(ctx.request.body));
  ctx.body = user;
});

router.put('/:id', bodyParser(), async ctx => {
  await userService.update(ctx.params.id, filter(ctx.request.body));
  ctx.body = { message: 'ok' };
});

router.delete('/:id', async ctx => {
  await userService.destroy(ctx.params.id);
  ctx.body = '';
});

module.exports = router.routes();
