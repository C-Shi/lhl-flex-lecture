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
