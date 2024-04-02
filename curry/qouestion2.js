function sum(a, b, c) {
    return a + b + c;
  }
  
  function currySum(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  
  console.log(sum(1,2,3));
  
  const sumWithInitialValue10 = currySum(10);
  
  console.log(sumWithInitialValue10(20)(0));