/* eslint-disable require-atomic-updates */
// this rule works bad with koa, and just works bad btw https://github.com/eslint/eslint/issues/11899

const router = require('@koa/router')();
const bodyParser = require('koa-body');
const boardService = require('./board.service');
const filter = require('../../helpers/filterUndefined');
const { authenticate } = require('../../middleware/auth');

router.get('/', authenticate('jwt'), async ctx => {
  const board = await boardService.getAll();
  ctx.body = board;
});

router.get('/:id', authenticate('jwt'), async ctx => {
  const board = await boardService.getById(ctx.params.id);
  if (!board) {
    ctx.status = 404;
    ctx.body = {
      message: ''
    };
    return;
  }
  ctx.body = board;
});

router.post('/', bodyParser(), authenticate('jwt'), async ctx => {
  const board = await boardService.create(filter(ctx.request.body));
  ctx.body = board;
});

router.put('/:id', bodyParser(), authenticate('jwt'), async ctx => {
  await boardService.update(ctx.params.id, filter(ctx.request.body));
  ctx.body = { message: 'ok' };
});

router.delete('/:id', authenticate('jwt'), async ctx => {
  await boardService.destroy(ctx.params.id);

  ctx.body = { message: 'ok' };
});

module.exports = router.routes();
