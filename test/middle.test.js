const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

let arr = [2, 3, 6, 8, 4, 1];

assertArraysEqual(eqArrays(middle(arr), [6, 8]), true);
