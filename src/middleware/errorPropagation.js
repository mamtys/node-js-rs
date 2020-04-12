/* eslint-disable callback-return */
// bullshit, no use with try catch

const errorPropagation = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { message: err.message };
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = errorPropagation;
