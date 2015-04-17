var fs = require('fs');
var http = require('http');
var async = require('async');

async.parallel([

    function wait(cb) {
      setTimeout(cb, 5e3);
    },

    function get(cb) {
      var req = http.get('http://google.com', function(res) {
        cb(null, res.headers);
      });
      req.once('error', cb);
    },

    function listFiles(cb) {
      fs.readdir(process.cwd(), cb);
    }

    ],

    function(err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
    });