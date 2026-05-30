// Day 35: Object creation patterns - Inheritance
let animal = {
  hasLegs: true,
  makeSound() {
    return "Generic animal sound";
  }
};

let dog = Object.create(animal);
dog.breed = "Golden Retriever";
console.log("Dog inherited hasLegs:", dog.hasLegs);
console.log("Dog breed own property:", dog.breed);