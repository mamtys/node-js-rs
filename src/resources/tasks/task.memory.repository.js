const Task = require('./task.model');
let storage = require('../storage').tasks;

const getAllByBoardId = async boardId => {
  return storage.filter(task => task.boardId === boardId);
};

const getByBoardIdAndId = async (boardId, id) => {
  return storage.find(task => task.id === id && task.boardId === boardId);
};

const update = async (id, data) => {
  const taskIndex = storage.findIndex(task => task.id === id);
  storage[taskIndex] = { ...storage[taskIndex], ...data };
};

const create = async (boardId, data) => {
  const task = new Task({ ...data, boardId });
  storage.push(task);

  return task;
};

const destroy = async id => {
  const taskIndex = storage.findIndex(board => board.id === id);
  if (taskIndex < 0) {
    return false;
  }
  storage.splice(taskIndex, 1);

  return true;
};

const unasignUser = async userId => {
  storage.forEach(task => {
    if (task.userId === userId) {
      task.userId = null;
    }
  });
};

const deleteByBoardId = async boardId => {
  storage = storage.filter(task => task.boardId !== boardId);
};

module.exports = {
  getAllByBoardId,
  getByBoardIdAndId,
  create,
  update,
  destroy,
  unasignUser,
  deleteByBoardId
};
