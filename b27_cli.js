#!/usr/bin/env node
'use strict';

var sv2bts = require('./').sv2bts;
var bts2sv = require('./').bts2sv;

function maybe_sv(s) {
  return !!s.match(/^[A-Z]+$/);
}

function maybe_bts(s) {
  return !!s.match(/^[0i1]+$/);
}

process.argv.slice(2).forEach(function(arg) {

  // bts -> sv

  if (maybe_sv(arg)) {
    console.log(sv2bts(arg)+' = '+arg);
  }

  if (maybe_bts(arg)) {
    console.log(arg+' = '+bts2sv(arg));
  }
});
