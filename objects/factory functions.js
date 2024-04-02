// factory function

let store = {
    withdraw : function (amount) {
      this.balance = this.balance - amount;
    },
  };
  
  function userCreator(name, bank, balance) {
    let obj = {};
    obj.name = name;
    obj.balance = balance;
    obj.bank = bank;
    obj.__proto__ = store;
    console.log(obj.__proto__)
    return obj;
  }
  let obj3 = {};
//   obj3.withdraw();
  
  let user1 = userCreator("abhishek", "icici", 10000);
  let user2 = userCreator("anurag", "axis", 50000);
  
  console.log(user2);
  user2.withdraw(500);
  console.log(user2);
  // obj.__proto__ => store
  