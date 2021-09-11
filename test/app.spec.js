'use strict';

const app = require('../app');
const supertest = require('supertest');
const chai = require('chai');

describe('app', () => {
  describe('api', () => {
    it('getting-started', (done) => {
      supertest(app)
        .get('/see-you-later')
        .expect('Content-Type', /html/)
        .expect(200, function(err, res) {
          if (err) {
            return done(err);
          }

          chai.expect(res.status).to.equal(200);

          done();
        });
    });

    it('see-you-later', (done) => {
      supertest(app)
        .get('/see-you-later')
        .expect('Content-Type', /html/)
        .expect(200, function(err, res) {
          if (err) {
            return done(err);
          }

          chai.expect(res.status).to.equal(200);

          done();
        });
    });

    it('whats-new', (done) => {
      supertest(app)
        .get('/whats-new')
        .expect('Content-Type', /html/)
        .expect(200, function(err, res) {
          if (err) {
            return done(err);
          }

          chai.expect(res.status).to.equal(200);

          done();
        });
    });

    it('unknown url', (done) => {
      supertest(app)
        .get('/unknown-url')
        .expect('Content-Type', /html/)
        .expect(404, function(err, res) {
          if (err) {
            return done(err);
          }

          chai.expect(res.status).to.equal(404);

          done();
        });
    });
  });
});
