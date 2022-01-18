const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe(`#Tests for assertArraysEqual method`, () => {
	it(`it should return true when the arrays are equal`, () => {
		assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
	});
	it(`it should return false when the arrays are equal but with different types`, () => {
		assert.strictEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
	});
	it(`it should return false when the arrays are not equal`, () => {
		assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
	});
});
