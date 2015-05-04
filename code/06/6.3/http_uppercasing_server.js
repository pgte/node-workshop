var http = require('http');
var net = require('net');

var server = http.createServer();

server.on('request', function(req, res) {
  req.pipe(net.connect(8002)).pipe(res);
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});