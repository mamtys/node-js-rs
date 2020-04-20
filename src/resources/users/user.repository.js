const User = require('./user.model');

const errorHandler = require('../../helpers/repositoryErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => {
  return await User.find();
};

const getById = async id => {
  return await User.findById(id);
};

const update = async (id, data) => {
  return await User.findByIdAndUpdate(id, data);
};

const create = async data => {
  return await User.create(data);
};

const destroy = async id => {
  return await User.findByIdAndDelete(id);
};

const repository = [getAll, getById, create, update, destroy];

module.exports = repository.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
