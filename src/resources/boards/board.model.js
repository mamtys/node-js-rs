/* eslint-disable node/no-unpublished-require */

const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Column = require('./column.schema');

const Board = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  title: {
    type: String,
    default: 'title'
  },
  columns: [Column]
});

Board.method('toJSON', function toJSON() {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('Board', Board);
