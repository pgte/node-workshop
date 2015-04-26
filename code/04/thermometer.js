var EventEmitter = require('events').EventEmitter;


// Thermometer

var thermometer = new EventEmitter();

thermometer.temperature = 20;

setInterval(function() {
  thermometer.temperature -= 0.1;
}, 1e3);

setInterval(function() {
  thermometer.emit('temperature', thermometer.temperature);
}, 1e3);

module.exports = thermometer;