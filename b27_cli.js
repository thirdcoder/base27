#!/usr/bin/env node
'use strict';

var sv2bts = require('./').sv2bts;

process.argv.slice(2).forEach(function(arg) {

  // sv -> bts
 
  console.log(arg+' = '+sv2bts(arg));
});
