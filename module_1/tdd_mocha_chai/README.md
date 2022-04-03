## Manual Testing
1. use `console.log` to print value
2. Debug tool / Break point
3. Browswer Test
#### What are the challenges with manual testing ?
1. potentially repetitive work
2. human error

## Automated Testing
1. use code to test against another piece of code
2. free up developer's time
3. improve your code quality

## Test Driven Development
**It is a software development workflow**
1. Start by writing test and failed
2. Write code to make test pass
3. Refactor/improve your code
4. Test again to make sure nothing break

**ADD PICTURE HERE**

## Automated Testing Tools
#### Test Runner
1. Execution unit that allows you to run a test
2. Create an isolate enviroment to run test against a specfic chunck of code
3. Common test runner are: **Mocha**, Karma, Jasmine

```js
describe('test calculator function', () => {
 it('should return 2 if calling add with 1 and 1', () => {
   // test 1 + 1 = 2
 });

 it('should return 0 if calling subtract with 1 and 1', () => {
   // test 1 - 1 = 0
 })
});
```

#### Assertion Library
1. A tool to verify that things are correct
2. Help simplify your test logic
3. NodeJS assert module, Chai

```js
function sum(x, y) {
  return x + y;
}

// using assertion library
assert.equal(sum(1, 2), 3);

// without assertion library
const result = sum(1, 2);
if(result !== 3) {
  throw new Error(`Expected ${result} to be equal to 3`);
}
```

## Node.js Module
1. Modules are blocks of encapsulated code that communicates with an external application
2. `module` is an object that is globally available
3. Developer can require or export a module

```js
// log module in any node.js file
console.log(module);

// require a module
const fs = require('fs');

// export a module
module.exports = {} // it can be anything
```

## Introduce Mocha
1. Test runner that help organize and execute code
2. Install with `npm i mocha` or `npm i mocha --save-dev`
3. Look for documentation at <a href="https://mochajs.org/">https://mochajs.org/</a>
4. Mocha handle error in a non-blocking way

```js
// describe is used to target a specific feature you want to test against
describe('test sum function', function() {
  // it is used to specify a specific test case
  it('should provide sum of 6 given [1, 2, 3]', function() {

  })

  it('should not provide sum of 6 given [1, 2]') // without callback to indicate pending
})
```

## Introduce Chai
1. More powerful, human readable assertion library
2. provide chainable method for easy testing
3. install package with `npm i chai` or `npm i chai --save-dev`
4. look for documentation at <a href="https://www.chaijs.com/">Docs</a> or <a href="https://devhints.io/chai">Cheet Sheet</a>

```js
// assert group
assert.isTrue(300 > 100);
assert.isArray('abc'.split(''));

// expect group
expect('Hello World')
  .to.be.a('string')
  .to.include('Hello')
```