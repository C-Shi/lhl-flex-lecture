class Vehicle {
    constructor(make) {
        this.make = make
    }

    info () {
        return `This is a ${this.make}`
    }
}

myCar = new Vehicle('Honda')
console.log(myCar.make)