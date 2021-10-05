'use strict';

const { NotFoundError } = require('./not-found-error');

module.exports = function handler(req, res, next) {
	next(new NotFoundError());
};
