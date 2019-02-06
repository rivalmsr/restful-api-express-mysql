'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res){
    connection.query('SELECT * FROM t_biodata_v1', function(error,rows,fields){
      if(error){
        console.log(error)
      }else{
        response.ok(rows, res)
      }
    });
};

exports.index = function(req, res){
  response.ok("hello from the node.js RESTful side!", res)
};
