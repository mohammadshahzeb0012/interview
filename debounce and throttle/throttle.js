let count = 0;
const display = document.getElementById('output')
const btn = document.getElementById('btn');

function updateLocation() {
    count++;
    display.innerText = count;
  }
  
  // 1st approach of throttling a function
  const functionOptimiser = (normalFn, cooldowntime) => {
    let canWeExecute = true;
    return function (...args) {
      // if my cooldown period is running
      //      -> do nothing
      // else
      //      -> execute fn
      if (canWeExecute) {
        // we are out of cooldowntime
        normalFn(...args);
        canWeExecute = false;
        setTimeout(() => {
          canWeExecute = true;
        }, cooldowntime);
      }
      // else add cute animation
    };
  };
  
  const throttledFn = functionOptimiser(updateLocation,1000);
  btn.addEventListener("click", () => {
      throttledFn();
  });
  
  