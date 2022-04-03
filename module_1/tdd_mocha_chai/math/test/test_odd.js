const math = require('../math');
const { expect } = require('chai');

describe('Test odd function', function() {
  it('should be an existing function', function() {
    expect(math.odd).to.be.a('function');
  });

  it('should return true if given odd number', function() {
    expect(math.odd(101)).to.be.true;
  });

  it('should return false if given even number', function() {
    expect(math.odd(100)).to.be.false;
  });

  it('should return false if given a float number', function() {
    expect(math.odd(100.1)).to.be.false;
  })

  it('should throw error if non-number given, with message: input should be a number', function() {
    expect(() => { math.odd('Hello World') }).to.throw('input should be a number');
  });
})