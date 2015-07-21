# base27

Balanced septemvigesimal to balanced-ternary

Usage:

    var sv2bts = require('base27').sv2bts;

    sv2bts('Z');    // iii
    sv2bts('ZA');   // iii001

Each base27 digit represents 3 trits:

     0 000      0
    +1 001      A           -1 00i    N
    +2 01i      B           -2 0i1    O
    +3 010      C           -3 0i0    P
    +4 011      D           -4 0ii    Q
    +5 1ii      E           -5 i11    R
    +6 1i0      F           -6 i10    S
    +7 1i1      G           -7 i1i    T
    +8 10i      H           -8 i01    U
    +9 100      I           -9 i00    V
   +10 101      J           -10 i01   W
   +11 11i      K           -11 ii1   X
   +12 110      L           -12 ii0   Y
   +13 111      M           -13 iii   Z

References:

http://digitalcommons.butler.edu/wordways/vol26/iss2/2/
Sallows, Lee (1993) "Base 27: The Key To A New Gematria," Word Ways: Vol. 26: Iss. 2, Article 2.
Available at: http://digitalcommons.butler.edu/wordways/vol26/iss2/2
-- uses balanced base 27 system: "\_" for 0, and then A-Z for 0-26

