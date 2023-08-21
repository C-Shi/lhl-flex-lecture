let myCar = {
    make: "Tesla",
    model: "Model 3",
    mileage: 0,
}

let yourCar = {
    make: "Ford",
    model: "F-150",
    mileage: 10000,
}

let plane = {
    make: "Airbus",
    model: "A320",
    airline: "Air Canada",
    mileage: 100000,
}

function drive(car, distance) {
    return car.mileage + distance;
}

function fly(airplane, distance) {
    return airplane.mileage + distance
}

function honk(car) {
    console.log(`${car.make} is honking: Honk honk!`);
}


// Your Code

myCar.mileage = drive(myCar, 10000);
console.log(myCar);

plane.mileage = fly(10000)
console.log(plane)