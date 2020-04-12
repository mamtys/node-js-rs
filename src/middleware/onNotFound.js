module.exports = async ctx => {
  ctx.status = 404;
  ctx.body = {
    message: 'Page Not Found'
  };
};
