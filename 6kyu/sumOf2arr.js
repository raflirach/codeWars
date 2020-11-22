arr1 = [3, 2, 9];
arr2 = [-1, 2, 1, 4];

const sumOfTwo = (a, b) => {
  if (a.length === 0 || b.length === 0) return [];
  let hasil = +a.join("") + +b.join("");
  hasil = hasil.toString().split("");
  if (hasil[0] === "-") {
    hasil.shift();
    hasil[0] = `-${hasil[0]}`;
  }

  return hasil.map((v) => +v);
};

console.log(sumOfTwo([], []));
console.log(sumOfTwo([4, 7, 3], [1, 2, 3]));
console.log(sumOfTwo([1], [5, 7, 6]));
console.log(sumOfTwo([3, 2, 6, 6], [-7, 2, 2, 8]));
