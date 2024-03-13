function createAccount(pin, amount) {
  let pinNum = pin;
  let balance = amount || 0;
  return {
    checkBalance(pin) {
      if (pinNum !== pin) return "Invalid PIN.";
      return `$${balance}`;
    },
    deposit(pin, amt) {
      if (pinNum !== pin) return "Invalid PIN.";
      balance = balance + amt;
      return `Successfully deposited $${amt}. Current balance: $${balance}.`;
    },
    withdraw(pin, amt) {
      if (pinNum !== pin) return "Invalid PIN.";
      if (balance - amt < 0)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      balance = balance - amt;
      return `Successfully withdrew $${amt}. Current balance: $${balance}.`;
    },
    changePin(pin, newPin) {
      if (pinNum !== pin) return "Invalid PIN.";
      pinNum = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
