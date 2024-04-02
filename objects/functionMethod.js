function userCreator(name, balance, bank) {
    let obj = {};
    obj.name = name;
    obj.balance = balance;
    obj.bank = bank;
    obj.withdraw = function (amount) {
      console.log(`withdraw ${amount}`);
    };
    return obj;
  }
  
  // Object.prototype.withdraw = function (amount) {
  //   console.log(`withdraw ${amount}`);
  // };
  
  const user1 = userCreator("azaz", 1000, "sbi");
  user1.withdraw(500);
  const user2 = userCreator("hafix", 1000, "axis");
  
//   let arr1 = [1, 2, 3];
  
//   arr1.withdraw(600);
  