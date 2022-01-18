const tail = require('../tail');
const assert = require('chai').assert;
describe(`#Tests for tail method`, () => {
	it(`should return all but the first element in an array as a new array`, () => {
		const arr1 = ['lion', 'monkey', 'dolphin'];
		assert.deepEqual(tail(arr1), ['monkey', 'dolphin']);
	});
	it(`should not return the first element in the original array in the new array`, () => {
		const arr1 = ['lion', 'monkey', 'dolphin'];
		assert.notDeepEqual(tail(arr1), ['lion', 'monkey']);
	});
});
