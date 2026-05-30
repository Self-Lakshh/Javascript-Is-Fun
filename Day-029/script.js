// Day 29: Learning: Variable Scopes - Block Scope vs Function Scope
const globalMsg = "Global Message";

function scopeTest() {
  const localMsg = "Local Function Message";
  console.log(globalMsg);
  console.log(localMsg);
  
  if (true) {
    const blockMsg = "Block Scoped Message";
    console.log(blockMsg);
  }
}

scopeTest();