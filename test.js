'use strict';

var test = require('tape');
var sv2bts = require('./').sv2bts;
var bts2sv = require('./').bts2sv;
var n2sv = require('./').n2sv;
var sv2n = require('./').sv2n;

test('sv2bts', function(t) {
  t.equal(sv2bts('Z'), 'iii');
  t.equal(sv2bts('Z0'), 'iii000');
  t.equal(sv2bts('ZA'), 'iii001');
  t.equal(sv2bts('MI'), '111100');
  t.end();
});

test('5-trit limits', function(t) {
  t.equal(sv2bts('QZ'), '0iiiii'); // might remove leading zeros here?
  t.equal(sv2bts('DM'), '011111');
  t.end();
});

test('bts2sv', function(t) {
  t.equal(bts2sv('iii'), 'Z');
  t.equal(bts2sv('iii000'), 'Z0');
  t.equal(bts2sv('iii001'), 'ZA');
  t.equal(bts2sv('111100'), 'MI');
  t.equal(bts2sv('101i0i'), 'JW');
  t.end();
});

test('n2sv', function(t) {
  t.equal(n2sv(0), '0');
  t.equal(n2sv(1), 'A');
  t.equal(n2sv(-13), 'Z');
  t.equal(n2sv(1234), 'BUU');
  t.equal(n2sv(-9464), 'Z0M');
  t.end();
});

test('sv2n', function(t) {
  t.equal(sv2n('0'), 0);
  t.equal(sv2n('A'), 1);
  t.equal(sv2n('Z'), -13);
  t.equal(sv2n('BUU'), 1234);
  t.equal(sv2n('Z0M'), -9464);
  t.equal(sv2n('AAA'), 757);
  t.end();
});
