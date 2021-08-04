class Account {
    constructor() {
      this.balance = 0
    }
    getCurrentBalance() {
        return this.balance;
      }

      deposit(amount) {
        this.balance += amount;
      }
}