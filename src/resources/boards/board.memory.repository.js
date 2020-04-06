const Board = require('./board.model');
const storage = require('../storage').boards;

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return storage;
};

const get = async id => {
  // TODO: mock implementation. should be replaced during task development
  return storage.find(board => board.id === id);
};

const update = async (id, data) => {
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = storage.findIndex(board => board.id === id);
  storage[boardIndex] = { ...storage[boardIndex], ...data };
};

const create = async data => {
  // TODO: mock implementation. should be replaced during task development
  const board = new Board(data);

  storage.push(board);
  return board;
};

const destroy = async id => {
  // TODO: mock implementation. should be replaced during task development
  const boardIndex = storage.findIndex(board => board.id === id);
  storage.splice(boardIndex, 1);
};

module.exports = { getAll, get, create, update, destroy };
