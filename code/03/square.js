function time() {
  return Math.floor(Math.random() * 3e3);
}

function square(n, cb) {
  setTimeout(function() {
    cb(null, n * n);
  }, time());
}

module.exports = function collectionSquare(numbers, cb) {
  var pending = numbers.length;
  var results = [];
  var calledback = false;

  numbers.forEach(function(n, index) {
    square(n, function(err, result) {
      pending --;
      if (err) {
        callback(err);
      }
      else {
        results[index] = result;
        if (! pending) {
          callback(null, results);
        }
      }

    });
  });

  function callback(err, results) {
    if (! calledback) {
      calledback = true;
      cb(err, results);
    }
  }
};
