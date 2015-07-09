'use strict';

var test = require('tape');
var sv2bts = require('./').sv2bts;

test('sv2bts', function(t) {
  t.equal(sv2bts('Z'), 'iii');
  t.equal(sv2bts('Z0'), 'iii000');
  t.equal(sv2bts('ZA'), 'iii001');
  t.equal(sv2bts('MI'), '111100');

  t.end();
});
