// Day 28: Learning: Functions: parameters and return values
function computeProduct(a, b = 1) {
  return a * b;
}

console.log("Product of 5 and 4:", computeProduct(5, 4));
console.log("Product with default value (5 * 1):", computeProduct(5));