/* eslint-disable node/no-unpublished-require */
// uuid needes only in dev

const uuid = require('uuid');

class Board {
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));
  }
}

class Column {
  constructor({ id = uuid(), title = 'title', order = 'order' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = { Board, Column };
