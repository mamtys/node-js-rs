const { InternalServerError } = require('http-errors');

const serviceErrorHandler = error => {
  // todo check for certain db Error instances
  if (error instanceof Error) {
    const internalError = new InternalServerError(error.message);
    internalError.stack = error.stack;
    throw internalError;
  }
};

module.exports = serviceErrorHandler;
