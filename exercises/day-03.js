// FUNCTIONS AS CONSTRUCTORS

// Create a function called `Vehicle` that accepts
// a driver as an argument and assign the driver
// to the context and execute it as a constructor
function Vehicle(driver) {
  this.driver = driver;
}

var vehicle = new Vehicle("Mich");
console.log(vehicle);

// // // Create a function called `Car` that accepts a driver,
// // // calls the function `Vehicle` with `call` and pass the
// // // driver and assign the speed in the context to 0
function Car(driver) {
  Vehicle.call(this, driver);
  this.speed = 0;
}

var teslaS = new Car("Mich");
console.log(teslaS);

// // Add a function called `drive`, `stop` and `speed` to
// // the `Car` prototype. Every time you call the
// // `drive` "method" it sets the `speed` to `50`,
// // every time you call the "method" `stop` it sets the
// // speed to `0` and finally every time you call the
// // "method" `getSpeed` it returns the speed
Car.prototype.stop = function() {
  this.speed = 0;
};

Car.prototype.drive = function() {
  this.speed = 50;
};

Car.prototype.getSpeed = function() {
  return this.speed;
};

console.log(teslaS.getSpeed()); // 0
console.log(teslaS.drive());
console.log(teslaS.getSpeed()); // 50
console.log(teslaS.stop());
console.log(teslaS.getSpeed()); // 0

// // CLASSES

// // Create a class called `Vehicle` that accepts
// // a driver as an argument on the constructor
// //  and assign the driver to the context
class Vehicle {
  constructor(driver) {
    this.driver = driver;
  }
}

var vehicle = new Vehicle("Mich");
console.log(vehicle);

// // // Create a class called `Car` that accepts a driver,
// // // extends the `Vehicle` class and passes the driver
// // // to the `Car` constructor driver and assign the
// // // speed in the context to 0
class Vehicle {
  constructor(driver) {
    this.driver = driver;
  }
}

class Car extends Vehicle {
  constructor(driver) {
    super(driver);
    this.speed = 0;
  }
}

var teslaS = new Car("Mich");
console.log(teslaS);

// // // Add the methods `drive`, `stop` and `getSpeed` to
// // // the `Car` class. Every time you call the
// // // `drive` "method" it sets the `speed` to `50`,
// // // every time you call the "method" `stop` it sets the
// // // speed to `0` and finally every time you call the
// // // "method" `getSpeed` it returns the speed
class Vehicle {
  constructor(driver) {
    this.driver = driver;
  }
}

var vehicle = new Vehicle("Mich");
console.log(vehicle);

class Car extends Vehicle {
  constructor(driver) {
    super(driver);
    this.speed = 0;
  }

  drive() {
    this.speed = 50;
  }

  stop() {
    this.speed = 0;
  }

  getSpeed() {
    return this.speed;
  }
}
var teslaS = new Car("Mich");
console.log(teslaS.getSpeed()); // 0
console.log(teslaS.drive());
console.log(teslaS.getSpeed()); // 50
console.log(teslaS.stop());
console.log(teslaS.getSpeed()); // 0

//
// SET PROTOTYPE OF
//

// Replicate all the previous examples using
// plain objects and `Object.setPrototypeOf`
var vehicle = {
  driver: "Mich"
};

var car = {
  speed: 0,
  drive() {
    this.speed = 50;
  },
  stop() {
    this.speed = 0;
  },
  getSpeed() {
    return this.speed;
  }
};

Object.setPrototypeOf(car, vehicle);
console.log(car.getSpeed());
car.drive();
console.log(car.getSpeed());
car.stop();
console.log(car.getSpeed());

//
// OBJECT CREATE
//

// Replicate all the previous examples using
// plain objects and `Object.create`

var vehicle = {
  driver: "Mich"
};

var car = Object.create(vehicle);
car.driver = "Mich";
car.speed = 0;
console.log(car);
//
// MIXINS
//
// Replicate all the previous examples using
// plain objects and mixins
var vehicle = {
  driver: "Mich"
};

var car = {
  ...vehicle,
  speed: 0
};
console.log(car.driver);
console.log(car.speed);

//
// FUNCTIONAL MIXINS
//

// Replicate all the previous examples using
// plain objects and functional mixins

function asVehicle(target, driver) {
  return {
    ...target,
    driver: driver
  };
}

function asCar(target) {
  function stop() {
    speed = 0;
  }
  function drive() {
    speed = 50;
  }
  function getSpeed() {
    return speed;
  }
  return {
    ...target,
    speed: 0,
    getSpeed,
    stop,
    drive
  };
}

const teslaS = asVehicle({}, "Mich", 0);
console.log(teslaS);
