'use strict';

const httpStatus = require('./http-status');

// eslint-disable-next-line no-unused-vars
module.exports = function filter(err, req, res, next) {
	console.error(err);
	// TODO: send 5xx page
	res.status(httpStatus.INTERNAL_SERVER_ERROR).send('I am sleeping');
};
