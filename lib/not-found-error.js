'use strict';

const { NOT_FOUND } = require('./http-status');

class NotFoundError extends Error {
	constructor() {
		super();
		this.status = NOT_FOUND;
	}
}

module.exports = { NotFoundError };
