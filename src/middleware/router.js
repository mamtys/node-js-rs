const router = require('@koa/router')();

const userRouter = require('../resources/users/user.router');
const boardRouter = require('../resources/boards/board.router');
const taskRouter = require('../resources/tasks/task.router');

router.use('/users', userRouter);
router.use('/boards', boardRouter);
router.use('/boards', taskRouter);

module.exports = router.routes();
