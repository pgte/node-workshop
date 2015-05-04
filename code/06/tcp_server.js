var net = require('net');

var server = net.createServer();

server.on('connection', function(conn) {
  console.log('I HAZ CONN');

  conn.setEncoding('utf8');
  conn.on('data', function(d) {
    process.stdout.write('data: ' + d);
  });
  conn.once('end', function() {
    console.log('ended');
  });
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
