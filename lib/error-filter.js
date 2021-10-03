'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = function filter(err, req, res, next) {
	console.error(err);
	// TODO: send 5xx page
	res.status(500).send('I am sleeping');
};
