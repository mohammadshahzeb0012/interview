// console.log(Math.min(1,2,3,4,5));
// console.log(Math.max(4,13,1));

// if I have array of numbers

let arr1 = [4, 13, 1, 99];
// we can use min & max using spread operator
// console.log(Math.min(...arr1));
// console.log(Math.max(...arr1));

// q -> use min & max without spread operator to
// find minimum and maximum value of array

// Math.min & max must be binded with window obj
console.log(Math.max(4, 13, 1));
// console.log(Math.max.call(window, 4, 13, 1));

console.log(Math.max.apply(window, [4, 13, 1]));

// // sir hmare paar ek variable hai like 
// let arr = [1,4,7,8,5,6,12]

// console.log(Math.max.apply(window, arr))
