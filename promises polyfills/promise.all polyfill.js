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
const p1 = promiseCreator(1000, true, "p1 resolved", "p1 rejected");
const p2 = promiseCreator(3000, true, "p2 resolved", "p2 rejected");
const p3 = promiseCreator(2000, true, "p3 resolved", "p3 rejected");

const promises = [p1, p2, p3];

function promiseAll(arrayOfPromise) {
    return new Promise((resolve, reject) => {
        let length = arrayOfPromise.length;
        const output = new Array(length);
        if (length === 0) {
          resolve(output);
          return;
        }
        arrayOfPromise.forEach(async (promise, index) => {
          try {
            const result = await promise;
            output[index] = result;
            length--;
            if (length === 0) {
              resolve(output);
              return;
            }
          } catch (err) {
            reject(err);
            return;
          }
        });
      });
    
  }
  promiseAll(promises).then(data=>console.log(data))  