var async = require('async');

function time() {
  return Math.floor(Math.random() * 3e3);
}

function square(n, cb) {
  setTimeout(function() {
    cb(null, n * n);
  }, time());
}

var numbers = [];

for(var i = 0 ; i < 10 ; i ++) {
  numbers.push(Math.floor(Math.random() * 1e6));
}

async.map(numbers, square, function(err, results) {
  if (err) {
    throw err;
  }

  numbers.forEach(function(n, idx) {
    console.log('%d => %d', n, results[idx]);
  });
});