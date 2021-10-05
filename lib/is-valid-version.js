'use strict';

const VERSION_REGEXP = /^\d+\.\d+$/;

module.exports = function isValid(str) {
	return VERSION_REGEXP.test(str);
}