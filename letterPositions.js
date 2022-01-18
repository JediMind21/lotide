let str = 'I like to listen to my music really loud';

const letterPositions = function (input) {
	const results = {};
	for (let x = 0; x < input.length; x++) {
		const char = input[x];
		if (char !== ' ') {
			//check out MDN
			if (!Array.isArray(results[char])) {
				results[char] = [x];
			} else {
				results[char].push(x);
			}
		}
	}
	return results;
};

console.log(letterPositions(str));

module.exports = letterPositions;
