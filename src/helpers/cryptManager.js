const bcrypt = require('bcrypt');
const { SALT_VALUE } = require('../common/config');

const generateHash = async password => {
  return await bcrypt.hash(password, SALT_VALUE);
};

const isPasswordValid = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  generateHash,
  isPasswordValid
};
