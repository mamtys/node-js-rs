const taskRepo = require('./task.memory.repository');

const errorHandler = require('../../helpers/serviceErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = () => taskRepo.getAll();

const getAllByBoardId = id => taskRepo.getAllByBoardId(id);

const getByBoardIdAndId = async (boardId, id) =>
  taskRepo.getByBoardIdAndId(boardId, id);

const update = async (id, data) => taskRepo.update(id, data);

const create = async (boardId, data) => taskRepo.create(boardId, data);

const destroy = async id => taskRepo.destroy(id);

const service = [
  getAll,
  getAllByBoardId,
  getByBoardIdAndId,
  update,
  create,
  destroy
];

module.exports = service.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
