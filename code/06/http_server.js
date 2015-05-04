var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  console.log('new request');
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});