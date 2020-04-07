const { Board } = require('./board.model');
const storage = require('../storage').boards;

const getAll = async () => {
  return storage;
};

const getById = async id => {
  return storage.find(board => board.id === id);
};

const update = async (id, data) => {
  const boardIndex = storage.findIndex(board => board.id === id);
  storage[boardIndex] = { ...storage[boardIndex], ...data };
};

const create = async data => {
  const board = new Board(data);

  storage.push(board);
  return board;
};

const destroy = async id => {
  const boardIndex = storage.findIndex(board => board.id === id);
  if (boardIndex < 0) {
    return false;
  }
  storage.splice(boardIndex, 1);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy
};
