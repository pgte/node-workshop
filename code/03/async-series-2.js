var async = require('async');
var fs = require('fs');

function wait(secs) {
  return function(cb) {
    setTimeout(cb, secs * 1e3);
  };
}

module.exports = function(path, cb) {
  var file;

  function writeTimestamp(cb) {
    fs.write(file, Date.now() + '\n', cb);
  }

  async.series([
      function open(cb) {
        fs.open(path, 'a', function(err, fd) {
          file = fd;
          cb(err);
        });
      },
      wait(1),
      writeTimestamp,
      wait(1),
      writeTimestamp
    ], cb);
};