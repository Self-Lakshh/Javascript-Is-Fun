// Day 46: ES6 Modules Practice
console.log("Day 46: ES6 Modules Practice");

const module1 = (() => {
    const PI = 3.14159;
    
    function calculateCircleArea(radius) {
        return PI * radius * radius;
    }
    
    return { PI, calculateCircleArea };
})();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    displayInfo() {
        console.log("User: " + this.name + ", Email: " + this.email);
    }
}

console.log('PI:', module1.PI);
console.log('Circle area (radius 5):', module1.calculateCircleArea(5));