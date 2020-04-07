const userRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => userRepo.getAll();

const getById = id => userRepo.getById(id);

const create = ({ name, login }) => userRepo.create({ name, login });

const update = (id, { name, login }) => userRepo.update(id, { name, login });

const destroy = id => {
  userRepo.destroy(id);
  taskRepo.unasignUser(id);
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  destroy
};
