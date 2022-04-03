const math = require('./math');
const assert = require('assert');

assert.equal(math.sum([1, 2, 3]), 3);

assert.equal(math.sum([1, 2, 3]), 6);

/**
 * Problems ?
 * 
 * 1. unorganize test file with manual execution
 * 2. stop at first fail
 */