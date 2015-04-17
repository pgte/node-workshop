var async = require('async');
var fs = require('fs');

function wait(secs) {
  return function(file, cb) {
    console.log(arguments);
    setTimeout(cb, secs * 1e3, null, file);
  };
}

module.exports = function(path, cb) {

  function writeTimestamp(file, cb) {
    fs.write(file, Date.now() + '\n', function(err) {
      cb(err, file);
    });
  }

  async.waterfall([
      fs.open.bind(fs, path, 'a'),
      wait(1),
      writeTimestamp,
      wait(1),
      writeTimestamp
    ], cb);
};