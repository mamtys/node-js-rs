const router = require('express').Router();
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await taskService.getAllByBoardId(req.params.boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  const task = await taskService.getByBoardIdAndId(
    req.params.boardId,
    req.params.id
  );
  if (!task) {
    res.status(404).json();
  }
  res.json(task);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = await taskService.create(req.params.boardId, req.body);
  res.json(task);
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  const task = await taskService.update(req.params.id, req.body);
  res.json(task);
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  taskService.destroy(req.params.id);

  res.json();
});

module.exports = router;
