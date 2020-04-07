const router = require('express').Router();
const userService = require('./user.service');

router.route('/').get(async (req, res) => {
  const user = await userService.getAll();
  console.log(user);
  res.json(user);
});

router.route('/:id').get(async (req, res) => {
  const user = await userService.getById(req.params.id);
  res.json(user);
});

router.route('/').post(async (req, res) => {
  const user = await userService.create(req.body);
  res.json(user);
});

router.route('/:id').put(async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.json(user);
});

router.route('/:id').delete(async (req, res) => {
  userService.destroy(req.params.id);
  res.json();
});

module.exports = router;
