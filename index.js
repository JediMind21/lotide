const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEquals = require('./assertEquals');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const find = require('./find');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');

module.exports = {
	head: head,
	tail: tail,
	middle: middle,
	assertEquals: assertEquals,
	assertArraysEqual: assertArraysEqual,
	assertObjectsEqual: assertObjectsEqual,
	countLetters: countLetters,
	countOnly: countOnly,
	eqArrays: eqArrays,
	eqObjects: eqObjects,
	find: find,
	findKeyByValue: findKeyByValue,
	letterPositions: letterPositions,
	map: map,
};
