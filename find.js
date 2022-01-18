const { modules } = require('./countOnly');

function find(obj, callback) {
	for (let key in obj) {
		let innerObj = obj[key];
		if (callback(innerObj)) return key;
	}
}

module.exports = find;
