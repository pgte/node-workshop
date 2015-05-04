var net = require('net');
var through = require('through2');

var server = net.createServer();

var throughOptions = {
  decodeStrings: false
};

function uppercasify(chunk, encoding, callback) {
  var self = this;
  setTimeout(function() {
    self.push(chunk.toUpperCase());
    callback();
  }, 1e3);
}

server.on('connection', function(conn) {

  conn.setEncoding('utf8');

  var uppercasing = through(throughOptions, uppercasify);

  conn.
    pipe(uppercasing).
    pipe(conn);

  uppercasing.pipe(process.stdout);
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});