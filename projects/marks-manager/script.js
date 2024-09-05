function evaluateGrades() {
  const input = document.getElementById("marks-input");
  const panel = document.getElementById("results-panel");
  const raw = input.value.trim();
  
  if (!raw) return alert("Enter marks first!");
  
  const marks = raw.split(',').map(m => parseFloat(m.trim())).filter(m => !isNaN(m));
  
  if (marks.length === 0) return alert("Valid numbers only!");
  
  const total = marks.length;
  const sum = marks.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / total;
  const highest = Math.max(...marks);
  const lowest = Math.min(...marks);
  
  let grade = 'F';
  let color = '#ef4444';
  
  if (avg >= 90) { grade = 'A'; color = '#22c55e'; }
  else if (avg >= 80) { grade = 'B'; color = '#38bdf8'; }
  else if (avg >= 70) { grade = 'C'; color = '#3b82f6'; }
  else if (avg >= 60) { grade = 'D'; color = '#eab308'; }
  
  document.getElementById("grade-avg").textContent = avg.toFixed(1);
  document.getElementById("grade-letter").textContent = grade;
  document.getElementById("grade-letter").style.color = color;
  document.getElementById("grade-total").textContent = total;
  document.getElementById("grade-highest").textContent = highest;
  document.getElementById("grade-lowest").textContent = lowest;
  
  panel.classList.remove("hidden");
}