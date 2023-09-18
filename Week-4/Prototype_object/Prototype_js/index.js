class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };

    getDetails(){
        let details = `this vehicle is make in ${this.make} and its model is ${this.model} and its year is ${this.year}`;
        return details;
    };
};

class Car extends Vehicle {
    constructor(make,model,year,numDoors){
        super(make,model,year);
        this.numDoors = numDoors;
    }
    getDetails(){
       return `this vehicle is make in ${this.make} and its model is ${this.model} and its year is ${this.year} its has ${this.numDoors} doors`;
    }
};


let car = new Car('MV', 2009, 2011,4);
let vec = new Vehicle('MV', 2009, 2011)

console.log(car.getDetails());
console.log(vec.getDetails());