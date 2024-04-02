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

function promiseAllSettled(arrayOfPromises) {
    return new Promise((resolve, reject) => {
      let pendingPromises = arrayOfPromises.length;
      const output = new Array(pendingPromises);
      // 0 promises
      if (pendingPromises === 0) {
        resolve(output);
        return;
      }
      // more than 0
      // I need to settle all promises parallely
      arrayOfPromises.forEach(async (item, index) => {
        try {
          const result = await item;
          output[index] = {
            status: "fulfilled",
            value: result,
          };
        } catch (err) {
          output[index] = {
            status: "rejected",
            reason: err,
          };
        }
        pendingPromises--;
        if (pendingPromises === 0) {
          resolve(output);
          return;
        }
      });
    });
  }
promiseAllSettled(promises).then(data=>console.log(data))  