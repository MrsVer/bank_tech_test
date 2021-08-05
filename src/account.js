class Account {
    constructor() {
      this.balance = 0
      this.date = new Date();
    }
    getCurrentBalance() {
        return this.balance;
      }

      deposit(balance) {
        this.balance += balance;
      }

      withdraw(balance) {
        this.balance += balance;
      }
}