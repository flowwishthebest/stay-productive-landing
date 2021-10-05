'use strict';

const app = require('../lib/app');
const supertest = require('supertest');

describe('app', () => {
	describe('api', () => {
		it('getting-started', (done) => {
			supertest(app)
				.get('/see-you-later')
				.expect('Content-Type', /html/)
				.expect(200, done);
		});

		it('see-you-later', (done) => {
			supertest(app)
				.get('/see-you-later')
				.expect('Content-Type', /html/)
				.expect(200, done);
		});

		it('whats-new', (done) => {
			supertest(app)
				.get('/whats-new')
				.expect('Content-Type', /html/)
				.expect(200, done);
		});

		it('unknown url', (done) => {
			supertest(app)
				.get('/unknown-url')
				.expect('Content-Type', /html/)
				.expect(404, done);
		});
	});
});
