// read-file-sync.js

var fs = require('fs');

var file = fs.readFileSync(__filename, {encoding: 'utf8'});

console.log(file);