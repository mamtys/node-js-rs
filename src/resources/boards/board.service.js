const boardRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const errorHandler = require('../../helpers/serviceErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = () => boardRepo.getAll();

const getById = id => boardRepo.getById(id);

const create = ({ title, columns }) => boardRepo.create({ title, columns });

const update = (id, { title, columns }) =>
  boardRepo.update(id, { title, columns });

const destroy = id => {
  taskRepo.deleteByBoardId(id);
  return boardRepo.destroy(id);
};

const service = [getAll, getById, create, update, destroy];

module.exports = service.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
