#!/usr/bin/env node
var http = require('http');
var URL = require('url');

var url = process.argv[2];
if (! url) {
  throw new Error('Need an URL');
}
url = URL.parse(url);


var body = process.argv[3];
if (! body) {
  throw new Error('Need body');
}

body = JSON.parse(body);

var options = {
  host: url.hostname,
  protocol: url.protocol,
  port: url.port,
  path: url.path,
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

var req = http.request(options, function(res) {
  console.log('status code:', res.statusCode);
  console.log('headers:', res.headers);
  res.pipe(process.stdout);
});

req.write(JSON.stringify(body));
req.end();