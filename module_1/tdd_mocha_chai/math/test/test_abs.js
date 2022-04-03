const math = require('../math');
const { expect } = require('chai')

describe('test abs function', function() {
  it('should be a function', function() {
    expect(math.abs).to.be.a('function')
  });

  it('should be greater or equal than parameter itself', function () {
    expect(math.abs(100))
      .to.be.a('number')
      .to.be.gte(100)
  })
  it('should return 100 if 100 is provided', function() {
    expect(math.abs(100)).eq(100)
  });

  it('should return 100 if -100 is provided', function() {
    expect(math.abs(-100)).to.equal(100)
  });
})