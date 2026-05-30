// Day 12: Array mutation methods: slice vs splice (Reference: W3Schools Array Methods)
let list = ["apple", "banana", "cherry", "date"];

let sliced = list.slice(1, 3);
console.log("Sliced list (non-mutated):", sliced);

let spliced = list.splice(1, 2, "blueberry", "kiwi");
console.log("Spliced items (removed):", spliced);
console.log("Original list mutated in place:", list);