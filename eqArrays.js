const assertEquals = require('./assertEquals');

const eqArrays = function (arr1, arr2) {
	let str1 = '';
	let str2 = '';
	if (arr1.length !== arr2.length) {
		return false;
	} else if (arr1.length === arr2.length) {
		for (let x = 0; x < arr1.length; x++) {
			if (typeof arr1[x] === typeof arr2[x]) {
				str1 += arr1[x];
				str2 += arr2[x];
			} else {
				return false;
			}
		}
		if (str1 === str2) {
			return true;
		} else return false;
	}
};

module.exports = eqArrays;
