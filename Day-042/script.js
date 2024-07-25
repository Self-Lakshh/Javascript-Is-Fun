// Day 42: Asynchronous JavaScript (Promises) - Promise.all vs Promise.race
console.log("Day 42: Promise Combinators Practice");

const p1 = new Promise(res => setTimeout(() => res("Fast response"), 200));
const p2 = new Promise(res => setTimeout(() => res("Slower response"), 600));

Promise.all([p1, p2]).then(results => console.log("Promise.all completed:", results));
Promise.race([p1, p2]).then(winner => console.log("Promise.race winner: " + winner));