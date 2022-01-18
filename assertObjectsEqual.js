
const assertObjectsEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: Object ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: Object ${actual} !== ${expected}`);
	}
};

const person1 = {
	name: `Brandon`,
	age: 28,
	height: `5' 10"`,
};

const person2 = {
	name: `Brandon`,
	age: 28,
	height: `5' 10"`,
};

const person3 = {
	name: `Darian`,
	age: 32,
	height: `6' 3"`,
};

// assertObjectsEqual(eqObjects(person1, person2), true);
// assertObjectsEqual(eqObjects(person2, person3), true);

module.exports = assertObjectsEqual;
