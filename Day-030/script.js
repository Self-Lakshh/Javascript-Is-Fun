// Day 030 - Specs & Project Release
// Day 30 - Milestone BMI Calculator logic
function computeBmi(w, hCm) {
  const hM = hCm / 100;
  if(isNaN(w) || isNaN(hCm) || hCm <= 0) return "Error: Invalid dimensions";
  const bmiVal = w / (hM * hM);
  let cat = "";
  if(bmiVal < 18.5) cat = "Underweight";
  else if (bmiVal < 25) cat = "Normal";
  else cat = "Overweight";
  return { bmi: bmiVal.toFixed(1), category: cat };
}
console.log("BMI calculation test:", computeBmi(70, 175));