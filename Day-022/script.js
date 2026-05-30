// Day 22: Advanced Math and bounded random functions
function drawLotto(min, max, count) {
  const list = new Set();
  while(list.size < count) {
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    list.add(val);
  }
  return [...list].sort((a,b) => a - b);
}

console.log("Lucky lotto digits:", drawLotto(1, 49, 6));