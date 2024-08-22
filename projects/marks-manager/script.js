function runMarks() {
  let txt = document.getElementById("marks-list").value;
  let arr = txt.split(",").map(Number).filter(x => !isNaN(x));
  if (arr.length === 0) return alert("Fill grades lists!");
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = (sum / arr.length).toFixed(1);
  let grade = avg >= 90 ? "A" : avg >= 80 ? "B" : "C";
  document.getElementById("marks-res").innerHTML = "Average: " + avg + "<br>Grade: " + grade;
}