/**
 * Converts a promise to a node-style callback function.
 *
 * @param {Promise} promise - The promise to convert.
 * @param {function} callback - The callback function to be called when the promise is resolved or rejected.
 * @returns {Promise|undefined} - If no callback is provided, returns the original promise. Otherwise, returns undefined.
 */
function withCallback (promise, callback) {
	if (!callback) {
		return promise;
	}

	promise.then(function(value) {
		callback(null, value);
	}, function(err) {
		callback(err);
	});
}

exports.withCallback = withCallback;