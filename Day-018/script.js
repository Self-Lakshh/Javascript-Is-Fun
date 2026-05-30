// Day 18: Type conversion: string, number, boolean
let strNum = "10";
let numStr = 10;

console.log("Number from string:", Number(strNum));
console.log("String from number:", String(numStr));
console.log("Implicit coercion (String concat):", "The count is " + numStr);

console.log("Boolean of 0:", Boolean(0));
console.log("Boolean of 'Text':", Boolean("Text"));