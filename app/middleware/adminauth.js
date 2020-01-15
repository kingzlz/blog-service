'use strict';
module.exports = (options, app) => {
  return async function adminauth(ctx, next) {
    console.log(ctx.session, options, app);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
      await next();
    }
  };
};
