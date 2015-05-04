
var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  var interval = setInterval(function() {
    res.write('a chunk of data\n');
  }, 1e3);

  setTimeout(function() {
    clearInterval(interval);
    res.end();
  }, 6e3);
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
