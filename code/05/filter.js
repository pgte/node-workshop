var join = require('path').join;
var fs = require('fs');
var zlib = require('zlib');
var split2 = require('split2');
var through2 = require('through2');

var source = fs.createReadStream(join(__dirname, 'registry.json.gz'));

var matcher = RegExp(process.argv[2] || 'pedro', 'i');

var removeComma = through2(function(chunk, encoding, callback) {
  chunk = chunk.toString().trim();
  if (chunk[chunk.length - 1] == ',') {
    chunk = chunk.slice(0, chunk.length - 1);
  }
  this.push(chunk);
  callback();
});

var parse = through2.obj(function(chunk, encoding, callback) {
  chunk = chunk.toString();
  try {
    this.push(JSON.parse(chunk));
  } catch(err) {
    parse.emit('error', err);
  }
  callback();
});

var filter = through2.obj(function(record, encoding, callback) {
  if (record.doc.maintainers &&
      record.doc.maintainers.some(function(maintainer) {
        var name = maintainer = maintainer.name || maintainer;
        return maintainer && matcher.test(maintainer);
      }))
  {
    this.push(record);
  };
  callback();
});

var stream =
  source.
    pipe(zlib.createGunzip()).
    pipe(split2()).
    pipe(removeComma).
    pipe(parse).
    pipe(filter)
    ;

stream.on('data', function(d) {
  console.log('- %s (%j)', d.doc.name, d.doc.maintainers);
});