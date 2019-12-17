'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/index/index', controller.index.home.index);
  router.get('/index/getArticleList', controller.index.home.getArticleList);
  router.get('/index/getArticleById/:id', controller.index.home.getArticleById);
  router.get('/index/getTypeInfo', controller.index.home.getTypeInfo);
  router.get('/index/getListById', controller.index.home.getListById);
};
