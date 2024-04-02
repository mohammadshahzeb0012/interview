const dummyFetchCreator = (n) => {
  let count = 0;
  return function dummyFetch() {
    return new Promise((resolve, reject) => {
      count++; // number of times my dummyFetch is called
      if (count <= n) {
        reject("error response");
      } else {
        resolve("succesful data");
      }
    });
  };
};

// this dummy fetch will fail for
// first 2 calls
const dummyFetch = dummyFetchCreator(2);

// this function will take fetch
// as of now we will pass dummyFetch
const retryFetchFn = async (dummyFetch, retries, finalErr) => {
  try {
    const res = await dummyFetch();
    return res;
  } catch (e) {
    if (retries === 1) {
      return Promise.reject(finalErr);
    } else {
      return retryFetchFn(dummyFetch, retries - 1, finalErr);
    }
  }
};
// dummyFetch()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

retryFetchFn(dummyFetch, 2, "we tried for 2 times, no products")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
