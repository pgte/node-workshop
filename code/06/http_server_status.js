
var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  res.setHeader('language', 'en');
  res.writeHead(500, {
    'content-type': 'application/json'
  });
  res.end(JSON.stringify({message: 'something went wrong'}));
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
