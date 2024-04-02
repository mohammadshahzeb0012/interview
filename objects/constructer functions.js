function User(name, bank, balance) {    
    this.name = name;
    this.bank = bank;
    this.balance = balance;
  }
  
  User.prototype.withdraw = function(amount){
      this.balance = this.balance - amount;
  }
  
  const user1 = new User("nikita", "sbi", 50000);
  const user2 = new User('azaz','axis',5000);
  
  
  console.log(user1);
  user1.withdraw(500);
  console.log(user1);
  
  // user1.test();
  // console.log(User.prototype);
  
  // new keyword
  // 1) new memory.__proto__ => User.prototype
  // 2) it's calling User function with new memory as reference
  // 3) it's returing new memory to user1
  // 4) no need of writing return keyword it'll be automatically ignored
  
  // user1.withdraw();
  
  
  // new keyword automates all the 4 things
  // we don't need to worry about __proto__
  // any prototype


//   function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
//   }
  
//   UserCreator.prototype.increment1 = function () {
//     this.score++;
//   };
  
//   UserCreator.prototype.increment2 = function () {
//       // here the value of this keyword is 'what
//       // everobj' you are calling it with
//     function add() {
//       this.score++;
//     }
//   // use arrow functions instead of normal functions
//     add.call(this);
//   };
  
//   const user1 = new UserCreator("adnan", 10);
  
//   console.log(user1);
//   user1.increment2();
//   console.log(user1);
  