class FreeUser {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
    increment() {
      this.score++;
    }
  }
  
  class PaidUser extends FreeUser {
    constructor(name,score,balance) {
      super(name,score);
      this.balance=balance;
    }
    analysis(){
      console.log('this is anaylisi');
    }
  }
  
  const user2 = new PaidUser('adnan',10,100);
  
  // extends
  // 1. PaidUser.prototype.__proto__ = FreeUser.prototype;
  // with this thing I can access FreeUser fns
  
  // 2. PaidUser.__proto__ = FreeUser
  // we need constructor function inside my PaidUser class
  // which eventually super keyword will use
  
  // super
  // it's responsible for creating new memory
  // super keyword should be the first thing that should
  // called first in the inherited class constructor function
  