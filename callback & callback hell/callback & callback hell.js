// // sync code -> thread blocking
// console.log("start");
// console.log("mid");
// console.log("end");

// console.log('-----------');
// // async code
// console.log("start");
// setTimeout(() => {
//   console.log("mid");
// }, 0);
// console.log("end");

// we are faking an async func

function intro(name,callback) {
    setTimeout(() => {
      callback(`Hi my name is ${name}`);
    }, 1000);
  }
  function workInfo(company,callback){
      setTimeout(()=>{
          callback(`I work at ${company}`);
      },500);
  }
  function cityInfo(city,callback){
      setTimeout(()=>{
          callback(`I live in ${city}`);
      },200);
  }
  
  function birthCityInfo(city,callback){
      setTimeout(()=>{
          callback(`I was born in ${city}`);
      },100);
  }
  
  // const display=(data)=>{
  //     console.log(data);
  // }
  // sync variable is accepting async result
  // const result = intro('karan',display);
  // console.log(result);
  
  intro("karan", (data) => {
    console.log(data);
    workInfo("walmart", (data) => {
      console.log(data);
      cityInfo("bengaluru", (data) => {
        console.log(data);
        birthCityInfo("delhi", (data) => {
          console.log(data);
        });
      });
    });
  });
  
  // problems with callback hell
  // 1st -> it looks ugly
              // -> reduce readability
              // -> not easy to work
              // -> not good practice
              // -> code grows horizontally
  // 2nd -> we are dependent on callback -> inversion of control
  // 3rd -> no error handling