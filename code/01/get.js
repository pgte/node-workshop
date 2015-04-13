#!/usr/bin/env node
var http = require('http');

var url = process.argv[2];
if (! url) {
  throw new Error('Need an URL');
}

http.get(url, function(res) {
  res.pipe(process.stdout);
});