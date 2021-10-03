'use strict';

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
		res.send('Whats up!');
	});
	
	router.all('*', (req, res) => {
		// TODO: send 4xx page
		res.status(404).send('I do not understand you');
	});

	return router;
};
