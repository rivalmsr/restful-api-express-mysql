'use strict';

module.exports = function(app){
  var todList = require('./controller');

  app.route('/')
    .get(todoList.index);

  app.route('/users')
    .get(todoList.users);
};
