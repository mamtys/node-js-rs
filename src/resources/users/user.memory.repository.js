const User = require('./user.model');
const storage = require('../storage').users;

const getAll = async () => {
  return storage;
};

const getById = async id => {
  return storage.find(user => user.id === id);
};

const update = async (id, data) => {
  const userIndex = storage.findIndex(user => user.id === id);
  storage[userIndex] = { ...storage[userIndex], ...data };
};

const create = async data => {
  const user = new User(data);

  storage.push(user);
  return user;
};

const destroy = async id => {
  const userIndex = storage.findIndex(user => user.id === id);
  storage.splice(userIndex, 1);
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  destroy
};
