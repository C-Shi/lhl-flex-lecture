// Primitive type

// Object
// Object type => key-value pair
const person = {
  name: 'John',
  age: 30,
  hobby: ['Reading', 'Shopping'],
  greet: function() {
    console.log('Hello')
  }
}

// Object Type => refer to any complex data type that is not primitive
const obj = { key: 'value' };
const arr = [1, 2, 3, 4];
const func = function() {}

console.log(obj instanceof Object)
console.log(arr instanceof Object)
console.log(func instanceof Object)

// Accessing value in object
const car = {
  make: "Ford",
  model: "Mustang",
  color: "Blue",
  mileage: 5000,
  drive: function(distance) {
    this.mileage += distance
  }
}

console.log(car.make)
console.log(car['make'])

var key = 'color';
console.log(car[key])

// Update value in object
car.color = 'Red'
console.log(car.color)

// Object iteration using for...in loop
const loop = {
  first: 'Banana',
  second: 'Apple',
  third: 'Pineapple'
}

for (var key in loop) {
  console.log(key)
  console.log(value)
}

// keyword This

