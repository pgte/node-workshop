var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  res.end('request headers: ' + JSON.stringify(req.headers, null, '  '));
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
