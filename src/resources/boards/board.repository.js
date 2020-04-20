const Board = require('./board.model');

const errorHandler = require('../../helpers/repositoryErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => {
  return await Board.find();
};

const getById = async id => {
  return await Board.findById(id);
};

const update = async (id, data) => {
  return await Board.findByIdAndUpdate(id, data);
};

const create = async data => {
  return await Board.create(data);
};

const destroy = async id => {
  return await Board.findByIdAndDelete(id);
};

const repository = [getAll, getById, create, update, destroy];

module.exports = repository.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
