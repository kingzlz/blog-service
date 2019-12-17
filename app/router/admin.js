'use strict';
module.exports = app => {
  const { router, controller } = app;
  // const adminauth = app.middleware.adminauth();
  router.post('/admin/checkOpenId', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', controller.admin.main.getTypeInfo);
};
