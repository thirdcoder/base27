'use strict';

var bts2n = require('balanced-ternary').bts2n;
var n2bts = require('balanced-ternary').n2bts;

// balanced septemvigesimal (BSV)
// aka:
// "septemvigesimal" https://en.wikipedia.org/wiki/Ternary_numeral_system#Compact_ternary_representation:_base_9_and_27
// "heptavigesimal" https://en.wikipedia.org/wiki/List_of_numeral_systems#Standard_positional_numeral_systems
var SV_TO_N = {
  0: 0,  

  A: 1,     N: -1,
  B: 2,     O: -2,
  C: 3,     P: -3,
  D: 4,     Q: -4,
  E: 5,     R: -5,
  F: 6,     S: -6,
  G: 7,     T: -7,
  H: 8,     U: -8,
  I: 9,     V: -9,
  J: 10,    W: -10,
  K: 11,    X: -11,
  L: 12,    Y: -12,
  M: 13,    Z: -13,
};

// integer to group of 3 balanced ternary digits 
// (redundant with balanced-ternary module + padding, but convenient here)
var N_TO_BTS3 = {
  0: '000',
  1: '001',   '-1': '00i',
  2: '01i',   '-2': '0i1',
  3: '010',   '-3': '0i0',
  4: '011',   '-4': '0ii',
  5: '1ii',   '-5': 'i11',
  6: '1i0',   '-6': 'i10',
  7: '1i1',   '-7': 'i1i',
  8: '10i',   '-8': 'i01',
  9: '100',   '-9': 'i00',
  10: '101',  '-10': 'i0i',
  11: '11i',  '-11': 'ii1',
  12: '110',  '-12': 'ii0',
  13: '111',  '-13': 'iii',
};

var BTS_TO_SV = {
  '000': '0',
  '001': 'A', '00i': 'N',
  '01i': 'B', '0i1': 'O',
  '010': 'C', '0i0': 'P',
  '011': 'D', '0ii': 'Q',
  '1ii': 'E', 'i11': 'R',
  '1i0': 'F', 'i10': 'S',
  '1i1': 'G', 'i1i': 'T',
  '10i': 'H', 'i01': 'U',
  '100': 'I', 'i00': 'V',
  '101': 'J', 'i0i': 'W',
  '11i': 'K', 'ii1': 'X',
  '110': 'L', 'ii0': 'Y',
  '111': 'M', 'iii': 'Z',

};

function sv2bts(sv) {
  var bt = '';

  for (var i = 0; i < sv.length; ++i) {
    var c = sv.charAt(i);
    var n = SV_TO_N[c];

    if (n === undefined) throw new Error('sv2bts('+sv+'): invalid balanced septemvigismal digit: '+c);

    bt += N_TO_BTS3[n];
  }

  return bt;
}

function bts2sv(bt) {
  var i = bt.length;
  var sv = '';

  do
  {
    var c1 = bt.charAt(--i);
    var c2 = bt.charAt(--i);
    var c3 = bt.charAt(--i);
    if (c2 === '') c2 = '0';
    if (c3 === '') c3 = '0';

    var digit = BTS_TO_SV[c3 + c2 + c1];
    if (digit === undefined) throw new Error('bts2sv('+bt+'): invalid balanced ternary digit triplet: '+c3+c2+c1);

    sv = digit + sv;
  } while (i > 0);

  return sv;
}

function n2sv(n) {
  return bts2sv(n2bts(n));
}

function sv2n(sv) {
  return bts2n(sv2bts(sv));
}

module.exports = {
  sv2bts: sv2bts,
  bts2sv: bts2sv,
  n2sv: n2sv,
  sv2n: sv2n,
  SV_TO_N: SV_TO_N,
  N_TO_BTS3: N_TO_BTS3,
  BTS_TO_SV: BTS_TO_SV,
};
