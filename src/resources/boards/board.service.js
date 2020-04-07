const boardRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => boardRepo.getAll();

const getById = id => boardRepo.getById(id);

const create = ({ title, columns }) => boardRepo.create({ title, columns });

const update = (id, { title, columns }) =>
  boardRepo.update(id, { title, columns });

const destroy = id => {
  taskRepo.deleteByBoardId(id);
  return boardRepo.destroy(id);
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  destroy
};
