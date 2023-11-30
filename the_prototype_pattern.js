console.log(`-------------------- The Prototype Pattern -----------------`);

console.log(`---------- 1st Way example -----------------------`);
const myCar = {
  name: 'Ford Escrot',
   drive() {
     console.log('Wait, I`m Driving!');
   }
  
  panic() {
    console.log(`Wait, How do you stop this thing?`);
  }
}

const yourCar = Object.create(myCar);
console.log(yourCar);
yourCar.drive();
yourCar.panic();


console.log(`---------- 2nd Way example -----------------------`);

class VehiclePrototype {
  constructor(model) {
    this.model = model
  }

  getModel() {
    console.log('The model of this vehicle is...' + this.model);
  }
  Clone(){}
}

class Vehicle extends VehiclePrototype {
  constructor(protected model) {
    super(model);
  }

  Clone() {
  return new Vehicle(this.model);
  }
}

const car = new Vehicle("Ford Escrot");
const car2 = car.Clone();
car2.getModel();
console.log('car: ', car, 'car2:',car2);

console.log(`--------------- 3rd way example -------------------`);

const beget = (() => {
  class F {
    constructor() {}
  }

  return proto =>  {
    F.prototype = proto;
    return new F();
  }
})();
