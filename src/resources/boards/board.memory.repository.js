const { Board } = require('./board.model');
const storage = require('../storage').boards;

const errorHandler = require('../../helpers/repositoryErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAll = async () => {
  return storage;
};

const getById = async id => {
  return storage.find(board => board.id === id);
};

const update = async (id, data) => {
  const boardIndex = storage.findIndex(board => board.id === id);
  storage.splice(boardIndex, 1, { ...storage[boardIndex], ...data });
};

const create = async data => {
  const board = new Board(data);

  storage.push(board);
  return board;
};

const destroy = async id => {
  const boardIndex = storage.findIndex(board => board.id === id);
  storage.splice(boardIndex, 1);
};

const repository = [getAll, getById, create, update, destroy];

module.exports = repository.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
