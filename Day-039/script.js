// Day 39: ES6 Classes Practice - Inheritance
class Vehicle {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand;
  }
  
  getInfo() {
    return "Vehicle: " + this.brand + " (" + this.type + ")";
  }
}

class ElectricVehicle extends Vehicle {
  constructor(brand, batteryCapacity) {
    super("Electric", brand);
    this.batteryCapacity = batteryCapacity;
  }
  
  getInfo() {
    return super.getInfo() + " with " + this.batteryCapacity + " kWh battery";
  }
}

const tesla = new ElectricVehicle("Tesla", 75);
console.log(tesla.getInfo());