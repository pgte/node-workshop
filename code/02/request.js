var http = require('http');
var URL = require('url');
var extend = require('util')._extend;

function request(options, cb) {
  if (typeof options == 'string') {
    options = {
      url: options
    }
  }

  var calledback = false;

  var url = URL.parse(options.url);

  delete options.url;

  options = extend({
    method: 'GET',
    hostname: url.hostname,
    port: url.port,
    protocol: url.protocol,
    path: url.path
  }, options);

  var req = http.request(options, function(err, res) {
    if (err) {
      callback(err);
    }
    else {
      var body = '';
      res.setEncoding(options.encoding || 'utf8');
      res.on('data', function(d) {
        body += d;
      });
      res.once('end', function() {
        callback(null, res, body);
      });
    }
  });

  req.once('error', callback);

  function callback() {
    if (! calledback) {
      calledback = true;
      cb.apply(null, arguments);
    }
  }

}

['get', 'post', 'put', 'delete', 'head'].forEach(function(method) {
  request[method] = function(options, cb) {
    if (typeof options !== 'object') {
      options = {
        url: options,
        method: method.toUpperCase()
      };
    }

    return request(options, cb);
  };
});

module.exports = request;
