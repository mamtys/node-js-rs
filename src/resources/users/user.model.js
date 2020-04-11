/* eslint-disable node/no-unpublished-require */
// uuid needes only in dev

const uuid = require('uuid');
const pass = Symbol('password');

class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this[pass] = password;
  }

  static getPassword(user) {
    return user[pass];
  }
}

module.exports = User;
