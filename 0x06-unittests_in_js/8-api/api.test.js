const { expect } = require('chai');
const request = require('request');

const baseUrl = 'http://localhost:7865/';

describe('integration tests', () => {
  it('should return home route', (done) => {
    request(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
