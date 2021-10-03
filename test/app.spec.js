'use strict';

const app = require('../lib/app');
const supertest = require('supertest');

describe('app', () => {
	describe('api', () => {
		it('getting-started', (done) => {
			supertest(app)
				.get('/see-you-later')
				.expect('Content-Type', /html/)
				.expect(200, (err) => {
					if (err) {
						return done(err);
					}
					done();
				});
		});

		it('see-you-later', (done) => {
			supertest(app)
				.get('/see-you-later')
				.expect('Content-Type', /html/)
				.expect(200, (err) => {
					if (err) {
						return done(err);
					}
					done();
				});
		});

		it('whats-new', (done) => {
			supertest(app)
				.get('/whats-new')
				.expect('Content-Type', /html/)
				.expect(200, (err) => {
					if (err) {
						return done(err);
					}
					done();
				});
		});

		it('unknown url', (done) => {
			supertest(app)
				.get('/unknown-url')
				.expect('Content-Type', /html/)
				.expect(404, (err) => {
					if (err) {
						return done(err);
					}
					done();
				});
		});
	});
});
