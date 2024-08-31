let txs = JSON.parse(localStorage.getItem('txs') || '[]');

function save() {
  localStorage.setItem('txs', JSON.stringify(txs));
  render();
}

function addTx(isInc) {
  const descInput = document.getElementById("exp-desc");
  const amtInput = document.getElementById("exp-amt");
  
  const desc = descInput.value.trim();
  let amt = parseFloat(amtInput.value);
  
  if (!desc || isNaN(amt)) return alert("Please fill fields!");
  
  if (!isInc) amt = -Math.abs(amt);
  else amt = Math.abs(amt);
  
  txs.push({ desc, amt });
  descInput.value = '';
  amtInput.value = '';
  save();
}

function delTx(i) {
  txs.splice(i, 1);
  save();
}

function render() {
  const list = document.getElementById("exp-list");
  list.innerHTML = '';
  
  let income = 0;
  let expense = 0;
  
  txs.forEach((t, i) => {
    if (t.amt > 0) income += t.amt;
    else expense += Math.abs(t.amt);
    
    const li = document.createElement('li');
    li.className = `ledger-item ${t.amt > 0 ? 'plus' : 'minus'}`;
    
    const info = document.createElement('span');
    info.textContent = t.desc;
    
    const right = document.createElement('div');
    right.style.display = 'flex';
    right.style.gap = '8px';
    right.style.alignItems = 'center';
    
    const amtSpan = document.createElement('span');
    amtSpan.className = `tx-amt ${t.amt > 0 ? 'plus' : 'minus'}`;
    amtSpan.textContent = `${t.amt > 0 ? '+' : '-'}$${Math.abs(t.amt).toFixed(2)}`;
    
    const delBtn = document.createElement('span');
    delBtn.style.cursor = 'pointer';
    delBtn.textContent = '❌';
    delBtn.onclick = () => delTx(i);
    
    right.appendChild(amtSpan);
    right.appendChild(delBtn);
    li.appendChild(info);
    li.appendChild(right);
    list.appendChild(li);
  });
  
  const total = income - expense;
  document.getElementById("exp-total").textContent = `${total < 0 ? '-' : ''}$${Math.abs(total).toFixed(2)}`;
  document.getElementById("summary-inc").textContent = `+$${income.toFixed(2)}`;
  document.getElementById("summary-exp").textContent = `-$${expense.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", render);