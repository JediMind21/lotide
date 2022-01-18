const middle = require('../middle');
const assert = require('chai').assert;

describe(`#Tests for middle method in lotide`, () => {
	it(`should return the middle 2 values in array if even number of items in array`, () => {
		let arr = [2, 3, 6, 8, 4, 1];
		assert.deepEqual(middle(arr), [6, 8]);
	});
	it(`should return the middle value in array if odd number of items in array`, () => {
		let arr = [2, 3, 6, 8, 4];
		assert.deepEqual(middle(arr), [6]);
	});
});
