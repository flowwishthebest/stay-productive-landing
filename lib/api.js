'use strict';

const isValidVersion = require('./is-valid-version');

module.exports = function buildApi(router) {
	router.get('/getting-started', (req, res, next) => {
		const ctx = {
			message: 'Thank you for installing `Stay productive` chrome extension.',
			title: 'Stay productive | Welcome!',
			copyright: new Date().getFullYear(),
		};

		res.render('hi', ctx, (err, html) => {
			if (err) {
				return next(err);
			}
			res.send(html);
		});
	});

	router.get('/see-you-later', (req, res, next) => {
		res.render('bye', {
			message: 'We will miss you. Come back sooner.',
			title: 'Stay productive | Bye bye!',
			copyright: new Date().getFullYear(),
		}, (err, html) => {
			if (err) {
				return next(err);
			}
			res.send(html);
		});
	});

	router.get('/whats-new', (req, res) => {
		const { from, to } = req.query;

		res.status(200);

		if (isValidVersion(from) && isValidVersion(to)) {
			res.send(`Whats new from ${from} to ${to}`);
		}
		else {
			// TODO: If format isnt matching - change below
			res.send("Render whats-new general page");
		}
	});

	return router;
};
