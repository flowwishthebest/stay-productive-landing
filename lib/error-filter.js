'use strict';

const httpStatus = require('./http-status');

// eslint-disable-next-line no-unused-vars
module.exports = function filter(err, req, res, next) {
	console.error(err);

	// TODO: check instanceof not message
	if (err.message === httpStatus.NOT_FOUND.toString()) {
		// TODO: send 4xx page
		return res
			.status(httpStatus.NOT_FOUND)
			.send('I do not understand you');
	}
	// TODO: send 5xx page
	res.status(httpStatus.INTERNAL_SERVER_ERROR).send('I am sleeping');
};
