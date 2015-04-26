var op = require('./async-series.js');

op('my-file.txt', function(err) {
  if (err) {
    throw err;
  }
  console.log('All done');
});