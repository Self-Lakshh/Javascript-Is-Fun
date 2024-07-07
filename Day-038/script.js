// Day 38: ES6 Classes Practice
class Car {
  constructor(make, model, year, speed = 0) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }
  
  accelerate(amount) {
    this.speed += amount;
    return this.make + " " + this.model + " accelerated to " + this.speed + " km/h";
  }
}

const myCar = new Car("Honda", "Civic", 2020);
console.log(myCar.accelerate(40));