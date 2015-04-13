// read-file-async.js

function finishedReading(err, file) {
  if (err) {
    throw err;
  }

  console.log('got file contents\n---------');
  console.log(file);
}

var fs = require('fs');

console.log('going to read a file')

var file = fs.readFile(
  __filename,
  {encoding: 'utf8'},
  finishedReading);

console.log('have started reading a file');