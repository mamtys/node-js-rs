const userRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => userRepo.getAll();

const getById = id => userRepo.getById(id);

const create = data => userRepo.create(data);

const update = (id, data) => userRepo.update(id, data);

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
