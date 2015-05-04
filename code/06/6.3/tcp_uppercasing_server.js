var net = require('net');
var through = require('through2');

var server = net.createServer();

var throughOptions = {
  encoding: 'utf8',
  decodeStrings: false
};

function uppercasify(chunk, encoding, callback) {
  this.push(chunk.toUpperCase());
  callback();
}

server.on('connection', function(conn) {
  conn.setEncoding('utf8');
  var uppercasing = through(throughOptions, uppercasify);
  conn.pipe(uppercasing).pipe(conn);
});

server.listen(8002, function() {
  console.log('server listening on %j', server.address());
});