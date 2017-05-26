// make it modular
var fs = require('fs');
var path = require('path');
var mod = require('./module');

var dirname = process.argv[2];
var file = process.argv[3];
var callback = function (err, list) {
  if(err){
    console.log(err);
  }
  list.map(function(ele){
    console.log(ele);
  })
}
mod(dirname, file, callback);
