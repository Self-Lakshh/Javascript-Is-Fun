function runCalc(op) {
  let n1 = parseFloat(document.getElementById("calc-n1").value);
  let n2 = parseFloat(document.getElementById("calc-n2").value);
  if (isNaN(n1) || isNaN(n2)) return alert("Please fill numbers!");
  let res = 0;
  if (op === '+') res = n1 + n2;
  if (op === '-') res = n1 - n2;
  if (op === '*') res = n1 * n2;
  if (op === '/') res = n2 !== 0 ? n1 / n2 : "Err: Div by Zero";
  document.getElementById("calc-res").textContent = "Result: " + res;
}