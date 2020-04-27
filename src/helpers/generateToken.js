const jwt = require('jsonwebtoken');
const {
  JWT: { LIFE, SECRET_KEY }
} = require('../common/config');

module.exports = id =>
  jwt.sign(
    {
      payload: {
        id
      },
      exp: Math.floor(Date.now() / 1000) + Number(LIFE)
    },
    SECRET_KEY
  );
