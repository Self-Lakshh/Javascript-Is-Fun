let currentInput = '';
let expression = '';

function press(val) {
  const displayRes = document.getElementById("calc-res");
  const displayExpr = document.getElementById("calc-expr");

  if (val === 'C') {
    currentInput = '';
    expression = '';
    displayRes.textContent = '0';
    displayExpr.textContent = '';
  } else if (val === 'back') {
    currentInput = currentInput.slice(0, -1);
    displayRes.textContent = currentInput || '0';
  } else if (val === '=') {
    if (!currentInput && !expression) return;
    try {
      let finalExpr = expression + currentInput;
      let evalExpr = finalExpr.replace(/x/g, '*');
      let result = eval(evalExpr);
      if (result === Infinity || isNaN(result)) {
        displayRes.textContent = 'Error';
      } else {
        displayRes.textContent = Number(result.toFixed(6));
      }
      displayExpr.textContent = finalExpr + ' =';
      currentInput = displayRes.textContent;
      expression = '';
    } catch (e) {
      displayRes.textContent = 'Error';
    }
  } else if (['+', '-', '*', '/'].includes(val)) {
    if (!currentInput && !expression) return;
    if (!currentInput && expression) {
      expression = expression.slice(0, -1) + val;
    } else {
      expression += currentInput + val;
      currentInput = '';
    }
    displayExpr.textContent = expression;
  } else {
    if (val === '.' && currentInput.includes('.')) return;
    currentInput += val;
    displayRes.textContent = currentInput;
  }
}