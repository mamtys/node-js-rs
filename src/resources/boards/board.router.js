const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const board = await boardService.getAll();
  res.json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getById(req.params.id);
  if (!board) {
    res.status(404).json();
  }
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(req.body);
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.update(req.params.id, req.body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.destroy(req.params.id);

  res.json();
});

module.exports = router;
