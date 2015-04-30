var fs = require('fs');
var join = require('path').join;

var path = join(__dirname, 'registry.json');
var stream = fs.createReadStream(path);

stream.setEncoding('utf8');

stream.on('readable', function() {
  var buf;
  while(buf = stream.read()) {
    console.log(buf);
  }
});