const math = require('../math');
const assert = require('assert');

describe('test sum function', function() {
  it('should provide sum of 6 given [1, 2, 3]', function() {
    assert.equal(math.sum([1, 2, 3]), 6);
  })

  it('should not provide sum of 6 given [1, 2]', function() {
    assert.notEqual(math.sum([1, 2]), 6)
  })
});