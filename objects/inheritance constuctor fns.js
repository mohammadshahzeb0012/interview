function UserCreator(name, score) {
    this.name = name;
    this.score = score;
  }
  
  UserCreator.prototype.increment = function () {
    this.score++;
  };
  
  const user1 = new UserCreator("dhruv", 10);
  
  function PaidUser(name, score, balance) {
    // this here is new memory formed when
    // we call PaidUser with new keyword
    // this.name=name;
    // this.score=score;
    UserCreator.call(this, name, score);
    this.balance = balance;
  }
  // PaidUser.prototype.ananlysis1 = function () {
  //   console.log("ananlysis 1");
  // };
  // whatever function you are writing above 
  // Object.create will be lost
  PaidUser.prototype = Object.create(UserCreator.prototype);
  // Object.setPrototypeOf(PaidUser.prototype,UserCreator.prototype);
  
  PaidUser.prototype.ananlysis2 = function () {
    console.log("ananlysis 2");
  };
  
  const user2 = new PaidUser("yuvraj", 9, 100);
  
  console.log(user2);
  user2.increment();
  console.log(user2);
  