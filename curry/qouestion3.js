// infinite currying

function sum(a) {
    return function (b) {
      if (b === undefined) {
        return a;
      } else {
        return sum(a + b);
      }
    };
  }
  
  // b is undefined
  sum(1)(); // 1;
  console.log(sum(1)());
  // a ->1
  // b -> undefined
  
  // // // // // // //
  sum(2)(5)(); // 7;
  console.log(sum(2)(5)());
  sum(7)(); // 7;
  // // // // // // //
  
  sum(10)(30)(50)(); //90
  console.log(sum(10)(30)(50)(20)());
  
  sum(40)(50)();
  sum(90)();
  