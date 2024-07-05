let total = 0;
function addExp() {
  let name = document.getElementById("exp-name").value.trim();
  let amt = parseFloat(document.getElementById("exp-amount").value);
  if (!name || isNaN(amt)) return alert("Please fill details!");
  total += amt;
  document.getElementById("exp-total").textContent = "Total Balance: $" + total.toFixed(2);
  let li = document.createElement("li");
  li.innerHTML = "<span>" + name + "</span><span>$" + amt.toFixed(2) + "</span>";
  document.getElementById("exp-list").appendChild(li);
  document.getElementById("exp-name").value = "";
  document.getElementById("exp-amount").value = "";
}