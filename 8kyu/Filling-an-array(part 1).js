// const arr = (N) => {
//   array = [];
//   for (let i = 0; i < N; i++) {
//     array.push(i);
//   }
//   return array;
// };

const arr = (n = 0) => [...Array(n).keys()];

console.log(arr(5));
