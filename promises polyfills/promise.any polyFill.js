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
// Promise.
const p1 = promiseCreator(1000, false, "p1 resolved", "p1 rejected");
const p2 = promiseCreator(3000, false, "p2 resolved", "p2 rejected");
const p3 = promiseCreator(2000, false, "p3 resolved", "p3 rejected");

const promises = [p1, p2, p3];

function promiseAny(arrayOfPromise) {
    return new Promise((resolve, reject) => {
      let length = arrayOfPromise.length;
      const errorOutput = new Array(length);
      if (length === 0) {
        reject(new AggregateError(errorOutput));
        return;
      }
      arrayOfPromise.forEach(async (item, index) => {
        try {
          const result = await item;
          resolve(result);
          return;
        } catch (err) {
          errorOutput[index] = err;
          length--;
          if (length === 0) {
            reject(new AggregateError(errorOutput));
            return;
          }
        }
      });
    });
  }
  

promiseAny([]).then(data => console.log(data))