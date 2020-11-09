const triangular = (n) =>
  n >= 0 ? [...Array(n + 1).keys()].reduce((a, b) => a + b) : 0;

// function triangular(n) {
//   return n <= 0 ? 0 : (n * (n + 1)) / 2;
// }

// console.log(triangular(2)); //3
// console.log(triangular(4)); //10

test = (7 >>> 0).toString(2);
console.log(test);
