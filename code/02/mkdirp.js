var fs = require('fs');
var path = require('path');

function join(base, dir) {
  if (dir === '') {
    base = '/';
  } else {
    base = path.join(base, dir);
  }
  return base;
}

function _mkdirp(base, target, cb) {
  if (target.length) {
    base.push(target.shift());
    var dir = base.reduce(join, '');
    fs.exists(dir, function(exists) {
      if (exists) {
        _mkdirp(base, target, cb);
      }
      else {
        fs.mkdir(dir, function(err) {
          if (err) {
            cb(err);
          }
          else {
            _mkdirp(base, target, cb);
          }
        });
      }
    });
  }
  else {
    if (cb) {
      cb();
    }
  }
}

function mkdirp(path, cb) {
  var dir = join(process.cwd(), path);
  path = path.split('/');

  _mkdirp([], path, cb);
}

module.exports = mkdirp;

