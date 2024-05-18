// Day 26: Learning loops: nested loops traversing 2D matrices
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log("Traversing 2D matrix:");
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log("Matrix [" + row + "][" + col + "] = " + matrix[row][col]);
  }
}