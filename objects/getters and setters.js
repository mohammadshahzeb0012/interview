class BankAccount {
    // to make any property private
    // you need to initiate those properties
    // before constructor with '#'
    #balance;
    constructor(name, balance, bank) {
      this.name = name;
      this.#balance = balance;
      this.bank = bank;
    }
    getBalance() {
      return this.#balance;
    }
  // get keyword was introduced
  // to convert get functions into properties
    get suraj(){
      return this.#balance;
    }
    setBalance(amount) {
      this.#balance = amount;
    }
  set suraj(amount){
      this.#balance = amount;
  }
  
  }
  
  const rahul = new BankAccount("rahul", 5000, "sbi");
  
  rahul.suraj = 1000000;
  console.log(rahul.suraj);
  