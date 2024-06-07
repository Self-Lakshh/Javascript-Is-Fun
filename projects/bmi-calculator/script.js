function runBmi() {
  let h = parseFloat(document.getElementById("bmi-height").value) / 100;
  let w = parseFloat(document.getElementById("bmi-weight").value);
  if (isNaN(h) || isNaN(w) || h <= 0) return alert("Fill valid values!");
  let bmi = (w / (h * h)).toFixed(1);
  document.getElementById("bmi-res").textContent = "BMI: " + bmi;
}