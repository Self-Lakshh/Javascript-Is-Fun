// Day 025 - Specs & Project Release
// Day 25: Deep closures state retention factory (Reference: JavaScript Mastery)
function createBankAccount(owner, initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      return owner + " deposited " + amount + ". Balance: " + balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Error: Insufficient funds for " + owner;
      balance -= amount;
      return owner + " withdrew " + amount + ". Balance: " + balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = createBankAccount("Self-Lakshh", 100);
console.log(myAccount.deposit(50));