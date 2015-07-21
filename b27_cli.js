#!/usr/bin/env node
'use strict';

var sv2bts = require('./').sv2bts;
var bts2sv = require('./').bts2sv;
var n2sv = require('./').n2sv;
var sv2n = require('./').sv2n;
var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;

function maybe_sv(s) {
  return !!s.match(/^[A-Z]+$/);
}

function maybe_bts(s) {
  return !!s.match(/^[0i1]+$/);
}

function maybe_n(s) {
  return !!s.match(/^[-+]?[0-9]+$/);
}

process.argv.slice(2).forEach(function(arg) {

  // bts -> n -> sv

  if (maybe_sv(arg)) {
    console.log(sv2bts(arg)+' = '+n2sv(arg)+' = '+arg);
  }

  if (maybe_n(arg)) {
    console.log(n2bts(arg)+' = '+arg+' = '+n2sv(arg));
  }

  if (maybe_bts(arg)) {
    console.log(arg+' = '+bts2n(arg)+' = '+bts2sv(arg));
  }
});
