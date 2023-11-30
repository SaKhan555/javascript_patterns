
console.log(`------------ The Factory Pattern ------------`);

// Types.js - Constructors used behind the scenes
// A constructor for defining new cars
class Car {
  constructor({ doors, state, color }) {
    this.doors = doors || 4;
    this.state = state || "brand new";
    this.color = color || "silver";
  }

  convertStringToH1(html) {
    return `<h1>${html}</h1>`;
  }
}

// A constructor for defining new trucks

class Truck {
  constructor({ state, wheelSize, color }) {
    this.state = state || "used";
    this.wheelSize = wheelSize || "large";
    this.color = color || "blue";
  }
}

// FactoryExample.js
// Define a vehicle factory
class VehicleFactory {
  // Define the prototypes and utilities for this factory

  // Our default vehicleClass is Car
  constructor() {
    console.log("in vehicle factory function");
    this.vehicleClass = Car;
  }

  //Our Factory method for creating new Vehicle instances
  createVehicle(options) {
    switch (options.vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
      //defaults toVehicleFactory.prototype.vehicleClass (Car)
    }
    return new this.vehicleClass(options);
  }
}

//Create an instance of our factory that make cars
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  state: "old",
  doors: 6,
});

//Test to confirm our car was created using the vehicleClass/prototype Car

//Outputs: true

console.log(car instanceof Car);
console.log(car instanceof VehicleFactory);

// outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);

const movingTruck = carFactory.createVehicle({
  vehicleType: "truck",
  color: "brown",
});

console.log(movingTruck);
console.log(movingTruck instanceof Truck);
console.log(movingTruck instanceof VehicleFactory);

class TruckFactory extends VehicleFactory {
  constructor() {
    console.log("in truck factory class");
    super();
    this.vehicleClass = Truck;
  }
}

const truckFactory = new TruckFactory();
const yellowTruck = truckFactory.createVehicle({
  state: "omg..so bad",
  color: "yellow",
  wheelSize: "so big",
});
console.log(yellowTruck);
console.log(car.convertStringToH1("Hello test"));
