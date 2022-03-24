# Objects in JS

## Primitive vs Object Type
### Primitive
- 7 Primitive types
  - `Boolean`, `Null`, `Undefined`, `Number`, `String`, `BigInt`, `Symbol`

```js
const bool = true;
const nul = null;
const undef = undefined;
const num = 15;
const str = "Hello World";
const bigInt = 9007199254740991n;
const sym = Symbol('symbol');
```
- Primitive data is **immutable**
```js
let age = 30;
console.log(age) // 30
age + 1;
console.log(age) // 30 -> age is primitive, it is immutable
age = age + 1;
console.log(age) // 31 -> primitive data can be re-assigned to a new value
let age_copy = age;
age_copy = 100;
console.log(age, age_copy) // 31, 100
```
### Object
- In JavaScript, most non-primitive data are `object`
- **object variable** vs **object type**
  - object variable
    - object variable are made up of key/value pairs
    - the key is always a string
    - the value can be any valid JS value (number, function, array, etc)
    - function inside of object as a value is called `method`
    - use keyword `this` refer to the object that calling the method
  ```js
  const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 31,
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  ```
  - object type

  ```js
  // object type
  const obj = { key: 'value' };
  const arr = [1, 2, 3, 4];
  const func = function(){};
  console.log(obj instanceof Object) // true
  console.log(arr instanceof Object) // true
  console.log(func instanceof Object) // true
  ```

  - Array is Object ?
    - Technically, YES. Array is a special type of Object, where the index is the key
    - But, developer should describe array as array, not object. Eg: Array is ordered, object is not

### Working with Object in JavaScript

#### Object definition
1. **Structural perspective**: Object a data type that contains key-value pairs
2. **Functional Perspective**: Object is a collection of properties associated with values and methods.
3. **Behavioral perspective**: Object is a data structure that describe what it is and what it can do.

```js
const car = {
  make: "Ford",
  model: "Mustang",
  color: "Blue",
  mileage: 5000,
  drive: function(distance) {
    this.mileage += distance
  }
}
```

#### Access value in object
1. dot notation
2. bracket notation
3. nonexistent key returns undefined

  ```js
  const student = {
    name: 'John',
    age: 18
  }

  // use both dot or bracket notation when you know exactly what you are looking for
  // dot notation is preferred
  console.log(student.name)
  console.log(student['name'])

  const giftWishList = {
    laptop: 2000,
    cellphone: 1000,
    snowboard: 500
  }

  // Don't worry about the syntax, pay attention to object accessing
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('What do you want to buy? \n', item => {
    // use bracket notation when key is dynamically decided at runtime
    const price = giftWishList[item]
    console.log(`To buy ${item} you need to pay $${price}`);
    readline.close();
  });

  console.log(`The price of car is ${giftWishList.car}`)
  ```
4. update value in object
  ```js
    const student = {
      name: 'John',
      age: 18
    }
    console.log(student.name) // 18
    student.name = 19;
    console.log(student.name) // 19
  ```

#### Object Iteration
1. Use `for ... in` to loop through object
  ```js
  var obj = {
    first: "first",
    second: "second",
    "3": "3" // add this in later to show unorder
  };
  for (var key in obj) {
    console.log(key);
  };
  ```
  - **object is unordered, object iteration is arbitrary**

2. Use `Object.keys().forEach()` to loop through object
  ```js
  const keysArr = Object.keys(obj)
  keysArr.forEach(key => console.log(key))
  ```
  - **Convert object keys to an array and loop through the array**

#### What is this?
1. `this` is a reserved keyword that refer to the context.
2. The value of `this` depends on where it is used
3. In object method, normally, it refers to the object that is calling the method

```js
const person = {
  name: 'John',
  whoAmI: function() {
    console.log(this)
  },
  child: {
    name: 'Bob',
    whoAmI: function() {
      console.log(this)
    }
  }
}

person.whoAmI(); // this refers to the person object
person.child.whoAmI(); // this refers to the child object

// out of scope
function whatIsThis() {
  console.log(this)
}

whatIsThis() // this refer to the global/window object, since any function/variable is attached to global

console.log(this) // this refer to module.exports
```

### Pass by value
1. Function Definition and Function execution
2. Parameters are always pass-by-value (create a copy)
3. Pass-by-value for object
  1. Reassignment will not reflect on the original object
  2. change made on the object's property will reflect on the original object

```js
// function definition
function increment(x) {
  x = x + 1;
}

const y = 1
// function execution
increment(y)
console.log(y) // 1

// object cannot be replaced
function emptyObj(obj) {
  obj = {}
  console.log(obj)
}
const student = {
  name: 'John'
}
emptyObj(student)
console.log(student)

// Value inside object can be altered
function throwCamera(houseCopy) {
  houseCopy.camera = false
}
const house = {
  camera: true
}
console.log(house.camera)
throwCamera(house)
console.log(house.camera)
```






