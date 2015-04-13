var fs = require('fs');

var path = process.argv[2];

fs.exists(path, function(exists) {
  if (exists) {
    fs.stat(path, function(err, stat) {
      if (err) {
        throw err;
      }
      console.log(stat.size);
    });
  }
});