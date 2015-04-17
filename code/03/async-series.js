var async = require('async');
var fs = require('fs');

module.exports = function(path, cb) {
  var file;

  async.series([

      function open(cb) {
        fs.open(path, 'a', function(err, fd) {
          file = fd;
          cb(err);
        });
      },

      function wait(cb) {
        setTimeout(cb, 1e3);
      },

      function writeTimestamp(cb) {
        fs.write(file, Date.now() + '\n', cb);
      },

      function wait(cb) {
        setTimeout(cb, 1e3);
      },

      function writeTimestamp(cb) {
        fs.write(file, Date.now() + '\n', cb);
      },

      function close(cb) {
        fs.close(file, cb);
      }

    ], cb);
};