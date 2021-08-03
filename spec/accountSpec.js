'use strict';

describe("Account", function () {
  let account;

  beforeEach(function () {
    account = new Account(); 
  });

  describe('Create Account', () => {
    
    it("Create an account with a balance of 0", () => {
      expect(account.balance).toEqual(0)
    });
  });
});
