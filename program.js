var fs = require('fs');
// return fs.readFileSync(process.argv[1]);
fs.readFile(process.argv[2], function(err, stuff){
  var string = stuff.toString().split('\n').length -1;
  console.log(string);

});
