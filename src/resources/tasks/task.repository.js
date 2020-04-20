/* eslint-disable require-atomic-updates */
const Task = require('./task.model');

const errorHandler = require('../../helpers/repositoryErrorHandler');
const createErrorHandlerWrap = require('../../helpers/createErrorHandlerWrap');
const withErrorHandler = createErrorHandlerWrap(errorHandler);

const getAllByBoardId = async boardId => {
  return await Task.find({ boardId });
};

const getByBoardIdAndId = async (boardId, id) => {
  return await Task.findOne({ boardId, _id: id });
};

const update = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data);
};

const create = async (boardId, data) => {
  console.log(data);
  return await Task.create({ ...data, boardId });
};

const destroy = async id => {
  return await Task.findByIdAndDelete(id);
};

const unasignUser = async userId => {
  return await Task.updateMany({ userId }, { userId: null });
};

const deleteByBoardId = async boardId => {
  return await Task.deleteMany({ boardId });
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
