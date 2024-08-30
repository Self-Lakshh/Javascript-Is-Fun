function calcBMI() {
  const height = parseFloat(document.getElementById("bmi-height").value);
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  
  document.getElementById("height-val").textContent = `${height} cm`;
  document.getElementById("weight-val").textContent = `${weight} kg`;
  
  const m = height / 100;
  const bmi = (weight / (m * m)).toFixed(1);
  
  const scoreEl = document.getElementById("bmi-res");
  const labelEl = document.getElementById("bmi-label");
  
  scoreEl.textContent = bmi;
  
  labelEl.className = 'bmi-status';
  if (bmi < 18.5) {
    labelEl.textContent = "Underweight";
    labelEl.classList.add("under");
  } else if (bmi < 25) {
    labelEl.textContent = "Normal Weight";
    labelEl.classList.add("normal");
  } else if (bmi < 30) {
    labelEl.textContent = "Overweight";
    labelEl.classList.add("over");
  } else {
    labelEl.textContent = "Obese";
    labelEl.classList.add("obese");
  }
}

document.addEventListener("DOMContentLoaded", calcBMI);