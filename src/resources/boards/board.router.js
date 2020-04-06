const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const board = await boardService.getAll();
  res.json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.get(req.params.id);
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(req.body);
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.update(req.params.id, req.params.body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.destroy(req.params.id);
  res.json();
});

module.exports = router;
