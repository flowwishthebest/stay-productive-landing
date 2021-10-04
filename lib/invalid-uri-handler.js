'use strict';

const httpStatus = require('./http-status');

module.exports = function handler(req, res, next) {
    // TODO: create and throw notFound error
	next(new Error(httpStatus.NOT_FOUND));
};
