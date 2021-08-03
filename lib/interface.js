document.addEventListener("DOMContentLoaded", () => {
    const updateBalance = () => {
      document.querySelector('#balance').innerText = account.balance;
    }
      const account = new Account();
      updateBalance();

    });