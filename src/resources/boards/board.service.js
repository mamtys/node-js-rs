const boardRepo = require('./board.repository');
const taskRepo = require('../tasks/task.repository');

const errorHandler = require('../../helpers/serviceErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => await boardRepo.getAll();

const getById = async id => await boardRepo.getById(id);

const create = async ({ title, columns }) =>
  await boardRepo.create({ title, columns });

const update = async (id, { title, columns }) =>
  await boardRepo.update(id, { title, columns });

const destroy = async id => {
  await taskRepo.deleteByBoardId(id);
  return await boardRepo.destroy(id);
};

const service = [getAll, getById, create, update, destroy];

module.exports = service.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
