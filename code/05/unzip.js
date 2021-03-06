#!/usr/bin/env node
var join = require('path').join;
var fs = require('fs');
var zlib = require('zlib');

var unzip = zlib.Unzip();
var source =
  fs.createReadStream(
    join(__dirname, 'registry.json.gz'));

source.pipe(unzip).on('data', function(data) {
  console.log('%j', data.toString());
});