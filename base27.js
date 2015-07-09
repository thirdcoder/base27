'use strict';

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
// TODO: bts2sv, groups of 3 trits

module.exports = {
  sv2bts: sv2bts,
};
