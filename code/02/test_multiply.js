var multiply = require('./multiply');

var numbers = [1,2,3,4,5];

var fn10 = multiply.by(10);
var fn5 = multiply.by(5);

console.log(
  numbers.map(fn5));

// [10, 20, 30, 40, 50]