'use strict';

const title = require("./copyright");
const cpr = require("./title");

module.exports = function filter(err, req, res) {
	console.error(err);
	const ctx = {
		title: title(),
		copyright: cpr(),
	};

	res.render('500', ctx, (err, html) => {
		if (err) {
			console.error(err);
			return;
		}
		res.send(html);
	});
};
