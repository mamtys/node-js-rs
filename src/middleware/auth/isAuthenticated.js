module.exports = async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    return next();
  }
  ctx.throw(401);
};
