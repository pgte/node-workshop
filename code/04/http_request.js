var http = require('http');

var req = http.get(process.argv[2]);

req.once('socket', function() {
  console.log('req socket');
});

req.once('prefinish', function() {
  console.log('req prefinish');
});

req.once('finish', function() {
  console.log('req finish');
});

req.once('close', function() {
  console.log('req close');
});

req.once('response', function(res) {
  console.log('req response');

  res.once('end', function() {
    console.log('  res ended');
  });

  res.on('data', function(data) {
    console.log('  res data', data);
  });
});

req.once('error', function(err) {
  console.log('error:', err.message);
});