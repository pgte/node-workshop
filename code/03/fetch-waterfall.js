var async = require('async');
var http = require('http');
var fs = require('fs');

function get(url) {
  return function(cb) {
    http.get(url, function(res) {
      cb(null, res.headers);
    }).once('error', cb);
  }
}

module.exports = function(url, path, cb) {

  async.waterfall([
      get(url),
      function(headers, cb) {
        cb(null, JSON.stringify(headers));
      },
      function(headers, cb) {
        fs.writeFile(path, headers, cb);
      }
      // fs.writeFile.bind(fs, path)
    ], cb);
};