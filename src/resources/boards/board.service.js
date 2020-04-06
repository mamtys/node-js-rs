const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const get = id => boardRepo.get(id);

const create = ({ title }) => boardRepo.create({ title });

const update = (id, { title, columns }) =>
  boardRepo.update(id, { title, columns });

const destroy = id => boardRepo.destroy(id);

module.exports = { getAll, create, get, update, destroy };
