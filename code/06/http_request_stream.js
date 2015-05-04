var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {

  req.setEncoding('utf8');

  var body = '';

  req.on('data', function(d) {
    body += d;
  });

  req.once('end', function() {
    res.end('request body is ' + body);
  });
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
