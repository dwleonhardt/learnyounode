// make it modular
var fs = require('fs');
var path = require('path');

module.exports = function sort(dirname, file, callback) {
 fs.readdir(dirname, function(err, list){
   if (err) {
     return callback(err);
   }
   var newArr = [];
   list.forEach(function(ele){
     if(path.extname(ele) === '.' +  file) {
       newArr.push(ele);
     }
   });
   callback(null, newArr);
 });
}
