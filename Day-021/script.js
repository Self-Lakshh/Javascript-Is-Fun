// Day 21: Array functions: map, filter, reduce (Reference: W3Schools Array Methods)
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled);

const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens list:", evens);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum aggregated:", sum);