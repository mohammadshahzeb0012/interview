const searchFn = (event) => {
    console.log(event.target.value);
  };
  
  // this will give me modified version of fn
  const functionOptimiser = (normalFn,delay) =>{
      let timerId;
      return function(...arg){
          // if my event is cancellable 'clearTimeout(timerId)'
          // will cancel my api call
  
          // else it won't be able to do anything
          clearTimeout(timerId);
          timerId=setTimeout(()=>{
              normalFn(...arg);
          },delay);
      }
  }
  
  const searchFn2 = functionOptimiser(searchFn,150);
  
  // timerId=setTimeout(()=>{
  //     normalFn('i');
  // },delay);
  
  // timerId = 1
  
  // timerId=setTimeout(()=>{
  //     normalFn('ip');
  // },delay);
  