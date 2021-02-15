const express = require('express'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/../'),
  router = express.Router(),
  { questionsController } = require('./controllers');

module.exports = function (app) {
  //router.get('/items', itemsController.all);
  router.get('/questions', questionsController.all);
  router.get('/questions/:name', questionsController.name);

  app.use('/', router);
};
