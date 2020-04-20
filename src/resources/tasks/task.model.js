/* eslint-disable node/no-unpublished-require */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const Task = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  order: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: 'title'
  },
  description: {
    type: String,
    default: 'description'
  },
  userId: {
    type: String,
    ref: 'User'
  },
  boardId: {
    type: String,
    ref: 'Board'
  },
  columnId: {
    type: String,
    ref: 'Column'
  }
});

Task.method('toJSON', function toJSON() {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Task', Task);
