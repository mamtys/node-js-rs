/* eslint-disable require-atomic-updates */
// this rule works bad with koa, and just works bad btw https://github.com/eslint/eslint/issues/11899

const router = require('@koa/router')();
const bodyParser = require('koa-body');
const taskService = require('./task.service');
const filter = require('../../helpers/filterUndefined');
const { authenticate } = require('../../middleware/auth');

router.get('/:boardId/tasks', authenticate('jwt'), async ctx => {
  const tasks = await taskService.getAllByBoardId(ctx.params.boardId);
  ctx.body = tasks;
});

router.get('/:boardId/tasks/:id', authenticate('jwt'), async ctx => {
  const task = await taskService.getByBoardIdAndId(
    ctx.params.boardId,
    ctx.params.id
  );
  if (!task) {
    ctx.throw(404);
  }
  ctx.body = task;
});

router.post('/:boardId/tasks', bodyParser(), authenticate('jwt'), async ctx => {
  const task = await taskService.create(
    ctx.params.boardId,
    filter(ctx.request.body)
  );
  ctx.body = task;
});

router.put(
  '/:boardId/tasks/:id',
  bodyParser(),
  authenticate('jwt'),
  async ctx => {
    await taskService.update(ctx.params.id, filter(ctx.request.body));
    ctx.body = { message: 'ok' };
  }
);

router.delete('/:boardId/tasks/:id', authenticate('jwt'), async ctx => {
  await taskService.destroy(ctx.params.id);

  ctx.body = '';
});

module.exports = router.routes();
