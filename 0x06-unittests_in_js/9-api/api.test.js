const { expect } = require('chai');
const request = require('request');

const baseUrl = 'http://localhost:7865';

describe('integration tests', () => {
  it('should return home route', (done) => {
    request(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return cart payment methods', (done) => {
    request(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return not found (404)', (done) => {
    request(`${baseUrl}/cart/str`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
