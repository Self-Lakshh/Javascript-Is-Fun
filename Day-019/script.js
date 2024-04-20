// Day 19: String methods practice: split, join, includes, startsWith
let message = "hello world from javascript mastery";

console.log("Includes 'world':", message.includes("world"));
console.log("StartsWith 'hello':", message.startsWith("hello"));

const words = message.split(" ");
console.log("Words array:", words);
console.log("Joined with dashes:", words.join("-"));