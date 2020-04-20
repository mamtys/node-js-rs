const taskRepo = require('./task.repository');

const errorHandler = require('../../helpers/serviceErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => await taskRepo.getAll();

const getAllByBoardId = async id => await taskRepo.getAllByBoardId(id);

const getByBoardIdAndId = async (boardId, id) =>
  await taskRepo.getByBoardIdAndId(boardId, id);

const update = async (id, data) => await taskRepo.update(id, data);

const create = async (boardId, data) => await taskRepo.create(boardId, data);

const destroy = async id => await taskRepo.destroy(id);

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
