// class is syntactical sugar
// over constuctor method

// under the hood js works constructor fn way
// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }

// UserCreator.prototype.increment1 = function () {
//   this.score++;
// };

class UserCreator {
    // constructor name is fixed
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  decrement(score){
    this.score = this.score - score;
  }
  akashMethod(){
    console.log('this is a random method');
  }
}

const user1 = new UserCreator("rahul",200);
user1.decrement(70)
console.log(user1);
