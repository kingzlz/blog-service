'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 前台,后台路由加载
 */
module.exports = app => {
  require('./router/index')(app);
  require('./router/admin')(app);
};
