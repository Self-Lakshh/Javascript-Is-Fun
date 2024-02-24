// Day 3: Double equals (==) abstract equality vs Triple equals (===) strict checks
console.log('"42" == 42 is coerced:', "42" == 42);
console.log('"42" === 42 is strict:', "42" === 42);

console.log("0 == '' (abstract):", 0 == "");
console.log("0 === '' (strict):", 0 === "");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);