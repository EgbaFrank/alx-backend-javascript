const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber test', () => {
  it('should add whole numbers correctly', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should round-up and add numbers correctly', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should round-up and add numbers correctly', () => {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });
  it('should round-down and add numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should round and add decimal numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.7, 3.7), 6);
  });
});
