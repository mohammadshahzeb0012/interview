// promise Combinations -> running promises parallely
// Promise.all
// Promise.AllSettled
// Promise.race
// Promise.any

// AND OR

// AND is seeking a false condition
// condition1 && con..........

// OR is seeking a true value
// condition1 || con..........

// Promise.all -> always seeks for rejected promise
// it's '&&' of promise combinations

// Promise.any -> always seeks for a fulfilled promise
// it's '||' of promise combinations

// Promise.race -> it seeks for first Settled promise
// it's not related to '||' or '&&'

function promiseCreator(delay, condition, data, error) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve(data);
        } else {
          reject(error);
        }
      }, delay);
    });
  }
  // Promise.all will accept array of promises
  const p1 = promiseCreator(1000, false, "p1 resolved", "p1 rejected");
  const p2 = promiseCreator(3000, false, "p2 resolved", "p2 rejected");
  const p3 = promiseCreator(2000, false, "p3 resolved", "p3 rejected");
  
  // PROMISE.ALL
  
  // const promCombination = Promise.all([]);
  // promCombination.then((res)=>{
  //     console.log('res->',res);
  // }).catch((err)=>{
  //     console.log('err->',err);
  // })
  
  // case 1 -> all promises fulfilled
  // this is giving me array of results
  
  // case 2 -> one promise rejected
  // we will get that error
  
  // case 3 -> all promises failing
  // we will get the fastest failing promise
  
  // PROMISE.ANY
  Promise.any([])
    .then((data) => {
      console.log('data->',data);
    })
    .catch((err) => {
      console.log('err->',err);
    });
  
  // case 1 -> if all promises are fulfilled
  // it will give you data of fastest resolved promise
  
  // case 2 -> if one of the promise is failing
  // it will give you data of fastest resolved promise
  
  // case 3 -> if all the promise are failing
  // we are getting array of errors in `AggregateError`
  // what is this `AggregateError` ?
  // ->The AggregateError object represents an error when several errors need to be wrapped in a single error
  // how can we access that array ? by writing .errors
  
  //
  // Promise.race([])
  //   .then((data) => {
  //     console.log("data-> ", data);
  //   })
  //   .catch((err) => {
  //     console.log("err-> ", err);
  //   });
  // Promise.race
  // only case -> anything we pass
  // it will give us first settled promise
  // it can be rejected as well as fulfilled
  
  // Promise.allSettled([p1,p2,p3,new Promise((res,rej)=>{
  //   res('hello')
  // })])
  //   .then((data) => {
  //     console.log("data->", data);
  //   })
  //   .catch((err) => {
  //     console.log("err->", err);
  //   });
  
  // case 1 -> all promise settled
  // we are getting array of objects
  // which contains status of promise
  // resulting value
  