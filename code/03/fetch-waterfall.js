var async = require('async');
var http = require('http');
var fs = require('fs');

function get(url) {
  return function(cb) {
    var req = http.get(url, function(res) {
      cb(null, res.headers);
    });

    req.once('error', cb);
  }
}

module.exports = function(url, path, cb) {

  async.waterfall([
      get(url),
      function(headers, cb) {
        cb(null, JSON.stringify(headers));
      },
      fs.writeFile.bind(fs, path)
    ], cb);
};