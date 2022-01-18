const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

let words = ['pig', 'toilet', 'party', 'shelter'];

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertArraysEqual(eqArrays([1, '2', 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays(words, ['pig']), false);
assertArraysEqual(eqArrays(words, ['pig', 'toilet', 'party', 'shelter']), true);
// assertArraysEqual([1, '2', 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(words, ['pig']);
// assertArraysEqual(words, ['pig', 'toilet', 'party', 'shelter']);
