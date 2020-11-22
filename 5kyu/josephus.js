function josephus(items, k) {
  const hasil = [];
  let i = 0;
  let n = k - 1;
  while (items.length !== 0) {
    if (i === 0) {
      k = n;
      while (k >= items.length) {
        k -= items.length;
      }
    } else {
      k += n;
      while (k >= items.length) {
        k -= items.length;
      }
    }
    i++;
    hasil.push(items.splice(k, 1)[0]);
  }
  return hasil;
}
arr = [1, 2, 3, 4, 5, 6, 7];
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 18));

// hasil = [];
// n = 3;
//
// i = 0;
// while (arr.length !== 0) {
//   if (i === 0) {
//     n = n - 1;
//   } else {
//     n += 2;
//     while (n >= arr.length) {
//       n -= arr.length;
//     }
//   }
//   i++;
//   hasil.push(arr.splice(n, 1)[0]);
//   console.log(hasil);
// }

// hasil.push(arr.splice(2, 1)[0]);
// console.log(arr);
// console.log(hasil);
// hasil.push(arr.splice(5, 1)[0]);
// console.log(arr);
// console.log(hasil);
// hasil.push(arr.splice(1, 1)[0]);
// console.log(arr);
// console.log(hasil);
