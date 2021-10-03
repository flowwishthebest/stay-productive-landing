'use strict';

const app = require('../lib/app');
const supertest = require('supertest');

describe('app', () => {
	describe('error filter', () => {
		it('should not send server into to client', (done) => {
			app.get('/error', () => {
				throw new Error('my error');
			});

			supertest(app)
				.get('/error')
				.expect('Content-Type', /html/)
				// TODO: expect 500 not 404, invoke error in handler
				.expect(404, (err) => {
					if (err) {
						return done(err);
					}
					done();
				});
		});
	});
});
