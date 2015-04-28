var EventEmitter = require('events').EventEmitter;

var clock = new EventEmitter();

var tic = true;
var sequence = 0;

setInterval(function() {
  clock.emit(tic ? 'tic' : 'toc', Date.now(), sequence ++);
  tic = !tic;
}, 1e3);

module.exports = clock;

clock.on('tic', function(ts, seq) {
  console.log('tic 1:', seq);
});

clock.on('tic', function(ts, seq) {
  console.log('tic 2:', seq);
});

clock.on('toc', function(ts, seq) {
  console.log('toc:', seq);
});