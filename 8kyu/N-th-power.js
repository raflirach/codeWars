// const index = (array, n) =>
//   !array[n] && n !== 0 && array[n] !== 0 ? -1 : array[n] ** n;

const index = (array, n) => (array.length - 1 < n ? -1 : array[n] ** n);

console.log(index([1, 2, 3, 4], 2)); //9
console.log(index([1, 3, 10, 100], 3)); //1000000
console.log(index([0, 1], 0)); // 1
console.log(index([1, 2], 3)); //-1
console.log(index([-8, -2, 0, 0], 2)); //0
