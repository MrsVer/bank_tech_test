document.addEventListener("DOMContentLoaded", () => {
    const updateBalance = () => {
      document.querySelector('#balance').innerText = account.balance;
    }
      const account = new Account();
      updateBalance();

      document.querySelector('#add_deposit').addEventListener('click', () => {
        balance.up();
        updateBalance();
      });
    
      document.querySelector('#withdraw_money').addEventListener('click', () => {
        balance.down();
        updateBalance();
      });

    });