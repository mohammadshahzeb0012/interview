// async keyword is used to tell
// js engine that this function
// will be used to handle async
// code

const p2 = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve("p2 is resolved");
      }, 10000);
    } else {
      setTimeout(() => {
        reject("p2 is rejected");
      }, 100);
    }
  });
  
  // function promiseCreator() {
  //   return new Promise((res, rej) => {
  //     const condition = true;
  //     if (condition) {
  //       setTimeout(() => {
  //         resolve("p2 is resolved");
  //       }, 100);
  //     } else {
  //       setTimeout(() => {
  //         reject("p2 is rejected");
  //       }, 100);
  //     }
  //   });
  // }
  
  // p2.catch((err)=>{
  //     console.log(err);
  // })
  
  // // // it's somewhat similar to .then internally
  // async function f1() {
  //   // it's returning a promise
  //   // it will wrap the returned
  //   // value into a fulfilled promise
  //   // this p2 is deepCopy of actual promise
  //   console.log('we are inside f1');
  //   return 'suraj';
  // }
  
  // //   this p2 is deepCopy of actual promise
  // // console.log(p2 === f1()); // false
  
  // f1();
  
  // for(let i=0;i<10000;i++){
  //     console.log('thread blocking code');
  // }
  
  async function test() {
      console.log('before p2');
      const result ='some sync code';
      console.log(result);
      console.log('after p2');
  //   const result = await promiseCreator;
  //   const result = await promiseCreator();
  }
  
  test();
  
  for(let i=0;i<1000;i++){
      console.log('thread blocking code');
  }
  
  