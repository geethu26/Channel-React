//private modifier - inside the class only accessible

class Account {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }
  showBalance(): void {
    console.log(`Balance: ${this.balance}`);
  }
}

const acct = new Account(2000);
acct.showBalance();
// console.log(acct.balance);
