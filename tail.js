const assertArraysEqual = require('./assertEqual');

const tail = function (input) {
	input.shift();
	return input;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

module.exports = tail;
