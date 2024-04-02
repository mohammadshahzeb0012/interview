let arr = [1, 2, 3, 4, 19];

delete Array.prototype.filter;

Array.prototype.filter = function (callback) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // callback gives me true
      res.push(this[i]);
    }
  }

  return res;
};

const output = arr.filter((item) => {
  return item < 18;
});

console.log(output);
