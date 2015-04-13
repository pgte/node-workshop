// read-file-async.js

var fs = require('fs');

console.log('going to read a file')

var file = fs.readFile(
  __filename,
  {encoding: 'utf8'},
  finishedReading);

function finishedReading(err, file) {
  if (err) {
    throw err;
  }

  console.log('got file contents\n---------');
  console.log(file);
}

console.log('have started reading a file');