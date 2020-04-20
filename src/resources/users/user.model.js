/* eslint-disable node/no-unpublished-require */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const User = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  name: {
    type: String,
    default: 'name'
  },
  login: {
    type: String,
    default: 'login'
  },
  password: {
    type: String,
    default: 'password'
  }
});

User.method('toJSON', function toJSON() {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, password, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model('User', User);
