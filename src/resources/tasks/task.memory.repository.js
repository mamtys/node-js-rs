/* eslint-disable require-atomic-updates */
const Task = require('./task.model');
let storage = require('../storage').tasks;

const errorHandler = require('../../helpers/repositoryErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAllByBoardId = async boardId => {
  return await storage.filter(task => task.boardId === boardId);
};

const getByBoardIdAndId = async (boardId, id) => {
  return await storage.find(task => task.id === id && task.boardId === boardId);
};

const update = async (id, data) => {
  const taskIndex = await storage.findIndex(task => task.id === id);
  await storage.splice(taskIndex, 1, { ...storage[taskIndex], ...data });
};

const create = async (boardId, data) => {
  const task = await new Task({ ...data, boardId });
  await storage.push(task);

  return task;
};

const destroy = async id => {
  const taskIndex = await storage.findIndex(board => board.id === id);
  if (taskIndex < 0) {
    return false;
  }
  await storage.splice(taskIndex, 1);

  return true;
};

const unasignUser = async userId => {
  await storage.forEach(task => {
    if (task.userId === userId) {
      task.userId = null;
    }
  });
};

const deleteByBoardId = async boardId => {
  storage = await storage.filter(task => task.boardId !== boardId);
};

const repository = [
  getAllByBoardId,
  getByBoardIdAndId,
  create,
  update,
  destroy,
  unasignUser,
  deleteByBoardId
];

module.exports = repository.reduce((acc, func) => {
  acc[func.name] = withErrorHandler(func);
  return acc;
}, {});
