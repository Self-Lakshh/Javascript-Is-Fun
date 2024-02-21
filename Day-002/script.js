// Day 2: Primitives (passed by value) vs Objects (passed by reference)
let count1 = 10;
let count2 = count1;
count2 = 20;
console.log("count1 stays 10: " + count1);

let person1 = { name: "Lakshya" };
let person2 = person1;
person2.name = "Self-Lakshh";
console.log("person1 name mutated to Self-Lakshh: " + person1.name);