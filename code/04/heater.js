var EventEmitter = require('events').EventEmitter;

var thermometer = require('./thermometer');

// heater

var heater = new EventEmitter();

heater.target = 24;
heater.margin = 2;

heater.ignite = function() {
  if (! heater.ignited) {
    heater.ignited = setInterval(function() {
      thermometer.temperature += 0.4;
    }, 1e3);
    heater.emit('ignited');
  }
};

heater.off = function() {
  clearInterval(heater.ignited);
  heater.ignited = null;
  heater.emit('off');
};

thermometer.on('temperature', function(temp) {
  if (temp > (heater.target + heater.margin)) {
    heater.off();
  } else if (temp < (heater.target - heater.margin)) {
    heater.ignite();
  }
});

heater.on('ignited', function() {
  console.log('heater ignited');
});

heater.on('off', function() {
  console.log('heater off');
});

thermometer.on('temperature', function(temp) {
  console.log('temperture:', temp);
});