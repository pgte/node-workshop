#!/usr/bin/env node

var net = require('net');

var s = net.connect(
  Number(process.argv[3]), process.argv[2]);

process.stdin.pipe(s).pipe(process.stdout);