'use strict';

var response = require('./res');
var connection = require('./conn');

exports.usersGet = function(req, res){
    connection.query('SELECT * FROM t_biodata_v1', function(error,rows,fields){
      if(error){
        console.log(error)
      }else{
        response.ok(rows, res)
      }
    });
};

exports.usersInput = function(req, res){

  var txtFirtName =  req.body.first_name;
  var txtLastName =  req.body.last_name;
  var txtEmail    =  req.body.email;
  var txtGender   =  req.body.gender;

  connection.query("INSERT INTO t_biodata_v1 (first_name, last_name, email, gender) VALUES (?,?,?,?)"
  ,txtFirtName.toString(),txtLastName.toString(),txtEmail.toString(),txtGender.toString()
  ,function(error, rows, fields){
      if(error){
        console.log(error)
      }else{
        console.log("one record inserted !");
        response.ok(rows, res)
      }
  });
};

exports.index = function(req, res){
  response.ok("hello from the node.js RESTful side!", res)
};
