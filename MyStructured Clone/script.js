// let a = 100;
// let b = a;

// console.log(a);
// console.log(b);

// b = 60;

// console.log(a);
// console.log(b);

// 1st method of cloning is '=' (assignment operator) -> shallow clone
// let obj1 = {
//   a: 10,
// };

// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj2.a = 70;

// console.log(obj1);
// console.log(obj2);

// 2nd method of cloning is '...' (spread operator) -> shallow clone

// // ex - 1 for 2nd method
// let obj1 = {
//   a: 10,
//   b: 20,
// };

// let obj2 = { ...obj1 };

// console.log('obj1 ->',obj1);
// console.log('obj2 ->',obj2);

// obj2.a = 90;
// obj2.b = 100;

// console.log('obj1 ->',obj1);
// console.log('obj2 ->',obj2);

// // exp - 2 for 2nd method

// let obj1 = {
//   a: 10,
//   b: 20,
//   c: {
//     d: 90,
//   },
// };

// let obj2 = { ...obj1 };

// console.log('obj1 ->',obj1);
// console.log('obj2 ->',obj2);

// obj2.a = 90;
// obj2.b = 100;
// obj2.c.d = 200;

// console.log('obj1 ->',obj1);
// console.log('obj2 ->',obj2);


// 3rd method is JSON.stringify & JSON.parse -> deepClone
// let obj1 = {
//   a: 10,
//   b: 20,
//   c: {
//     d: 90,
//   },
// };

// const str = JSON.stringify(obj1);
// // console.log(obj1);
// // console.log(str);
// // {"a":10,"b":20,"c":{"d":90}}

// const obj2 = JSON.parse(str);
// console.log(obj1);
// console.log(obj2);

// obj2.a=100;
// obj2.b=200;
// obj2.c.d = 900;

// console.log(obj1);
// console.log(obj2);













// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

// write your own structured clone
// polyfill of structed Clone

const deepClone = (obj) => {
    // are we sure if this obj is an obj??
    const type = typeof obj;
    if (type !== "object" || obj === null) return obj; // it will act as assignment
  
  //   obj can be array as well
  // [1,{},'hello'] // this is an actual array
  // this is algo for arrays
  if(Array.isArray(obj)){
      // // [1,{},'hello']
      // [deepClone(1),deepClone({}),deepClone('hello')];
      return obj.map(value => deepClone(value));
  }
  
  // algorithm for objects
  // [[index0,1],[index1,{}],[index2,'hello']] // array version of obj
  
    // so from here I am damn sure it's an object
  
    //  now the looping part
    //   convert my obj into an array
    const arrObj = Object.entries(obj);
    //   using this arrObj. I have to make
    //   a deepClone version of arrObj
    const deepCloneArr = arrObj.map((item) => [item[0], deepClone(item[1])]);
  
    return Object.fromEntries(deepCloneArr); // Object.fromEntries is opposite of Object.entries
  };
  
  const object1 = {
    a: "somestring", //['a', 'somestring']
    b: 42,
    c: {
      d: 100,
    },
  };
  
  const obj2 = deepClone(object1);
  
  console.log(object1);
  console.log(obj2);
  
  obj2.a ='hello';
  obj2.c.d = 200;
  
  console.log(object1);
  console.log(obj2);