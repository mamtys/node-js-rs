const createErrorHandlerWrap = errorHandler => fn => async (...args) => {
  try {
    return await fn.apply(this, args);
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = createErrorHandlerWrap;
