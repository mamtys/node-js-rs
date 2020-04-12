const User = require('./user.model');
const storage = require('../storage').users;

const errorHandler = require('../../helpers/repositoryErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => {
  return await storage;
};

const getById = async id => {
  return await storage.find(user => user.id === id);
};

const update = async (id, data) => {
  const userIndex = await storage.findIndex(user => user.id === id);
  await storage.splice(userIndex, 1, { ...storage[userIndex], ...data });
};

const create = async data => {
  const user = await new User(data);

  await storage.push(user);
  return user;
};

const destroy = async id => {
  const userIndex = await storage.findIndex(user => user.id === id);
  await storage.splice(userIndex, 1);
};

const repository = [getAll, getById, create, update, destroy];

module.exports = repository.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
