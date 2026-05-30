// Day 13: Array manipulation: slice, splice, concat, index lookup
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = arr1.concat(arr2);
console.log("Concat array:", combined);

console.log("IndexOf 3:", combined.indexOf(3));
console.log("Includes 6:", combined.includes(6));

console.log("Last 2 elements:", combined.slice(-2));