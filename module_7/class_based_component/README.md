# W19: Class-based Components

- [x] Review of Classes and OOP
- [x] History of Class-based Components in React
- [x] Refactor `funny_camp` to Class based components
- [x] Component Lifecycle Method
- [x] Trends with Class-based Components

### JavaScript and Object Orient Programming
* JavaScript is multi-paradigm programming language that support functional and object-oriented programming
* We have been programming in a functional and procedural way using JavaScript
    
    ```js
    const a = 5;
    const b = 10;

    function sum(x, y) {
        return x + y;
    }

    const c = sum(a, b) // 15
    ```

* JavaScript can also be written in object-oriented approach

    ```js
    class Vehicle {
        constructor(make, model, mileage) {
            this.make = make;
            this.model = model;
            this.mileage = mileage;
        }

        move(distance) {
            this.mileage = this.mileage + distance
        }
    }

    class Car extends Vehicle {
        constructor(make, model, mileage) {
            super(make, model, mileage)
        }

        drive(distance) {
            super.move(distance)
        }

        honk() {
            console.log(`${this.make} is honking: Honk honk!`);
        }
    }

    class Airplane extends Vehicle {
        constructor(make, model, airline, mileage) {
            super(make, model, mileage)
            this.airline = airline
        }

        fly(distance) {
            super.move(distance)
        }
    }

    myCar = new Car("Tesla", "Model 3", 0)
    yourCar = new Car("Ford", "F-150", 10000)
    plane = new Airplane("Airbus", "A320", "Air Canada", 123)

    ```

* OOP in JavaScript behave different than other traditional OOP languages such as Ruby, Python, C++