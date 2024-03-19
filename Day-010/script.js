// Day 10: Array mutations: push, pop, shift, unshift (Reference: W3Schools Array Methods)
let tasks = ["Write code", "Drink water"];
tasks.push("Sleep");
console.log("After push:", tasks);

let lastTask = tasks.pop();
console.log("Popped task: " + lastTask + ". Remaining:", tasks);

tasks.unshift("Review PR");
console.log("After unshift:", tasks);

let firstTask = tasks.shift();
console.log("Shifted task: " + firstTask + ". Remaining:", tasks);