const userRepo = require('./user.repository');
const taskRepo = require('../tasks/task.repository');

const cryptManager = require('../../helpers/cryptManager');

const errorHandler = require('../../helpers/serviceErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => await userRepo.getAll();

const getById = async id => await userRepo.getById(id);

const create = async data => {
  const password = await cryptManager.generateHash(data.password);
  return await userRepo.create({ ...data, password });
};

const update = async (id, data) => await userRepo.update(id, data);

const destroy = async id => {
  await taskRepo.unasignUser(id);
  await userRepo.destroy(id);
};

const getByLogin = async login => await userRepo.getByLogin(login);

const service = [getAll, getById, create, update, destroy, getByLogin];

module.exports = service.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
