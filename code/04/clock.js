var EventEmitter = require('events').EventEmitter;

var clock = new EventEmitter();

var tic = true;

setInterval(function() {
  clock.emit(tic ? 'tic' : 'toc', Date.now());
  tic = !tic;
}, 1e3);

module.exports = clock;