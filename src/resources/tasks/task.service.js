const taskRepo = require('./task.memory.repository');

const getAll = () => taskRepo.getAll();

const getAllByBoardId = id => taskRepo.getAllByBoardId(id);

const getByBoardIdAndId = async (boardId, id) =>
  taskRepo.getByBoardIdAndId(boardId, id);

const update = async (id, data) => taskRepo.update(id, data);

const create = async (boardId, data) => taskRepo.create(boardId, data);

const destroy = async id => taskRepo.destroy(id);

module.exports = {
  getAll,
  getAllByBoardId,
  getByBoardIdAndId,
  update,
  create,
  destroy
};
