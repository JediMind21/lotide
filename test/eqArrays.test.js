const assertEquals = require('../assertEquals');
const eqArrays = require('../eqArrays');

let words = ['pig', 'toilet', 'party', 'shelter'];

assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEquals(eqArrays(['1', 2, 3], [1, 2, 3]), false);
