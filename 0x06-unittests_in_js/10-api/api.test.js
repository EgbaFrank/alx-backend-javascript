const { expect } = require('chai');
const request = require('request');

const baseUrl = 'http://localhost:7865';

describe('integration tests', () => {
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

  it('should login user', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'ted' },
    };
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome ted');
      done();
    });
  });

  it('should return avaliable payment json', (done) => {
    request(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});
