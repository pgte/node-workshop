var net = require('net');

var server = net.createServer();

server.on('connection', function(conn) {
  conn.pipe(conn);
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
