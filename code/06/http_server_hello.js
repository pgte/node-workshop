var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  res.write('Hello there!');
  res.write('Hello there!');
  res.end();
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});