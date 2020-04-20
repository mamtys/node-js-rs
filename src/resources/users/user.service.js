const userRepo = require('./user.repository');
const taskRepo = require('../tasks/task.repository');

const errorHandler = require('../../helpers/serviceErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => await userRepo.getAll();

const getById = async id => await userRepo.getById(id);

const create = async data => await userRepo.create(data);

const update = async (id, data) => await userRepo.update(id, data);

const destroy = async id => {
  await taskRepo.unasignUser(id);
  await userRepo.destroy(id);
};

const service = [getAll, getById, create, update, destroy];

module.exports = service.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
