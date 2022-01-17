const assertArraysEqual = require('./assertEquals');

const tail = function (input) {
	input.shift();
	return input;
};

module.exports = tail;
