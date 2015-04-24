function multiply(a, b) {
  return a * b;
};

multiply.by = function by(n) {
  return function(n2) {
    return multiply(n, n2);
  };
};

module.exports = multiply;
