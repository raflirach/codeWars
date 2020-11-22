const arrayPlusArray = (arr1, arr2) => {
  let hasil = 0;
  for (let i = 0; i < arr1.length; i++) {
    hasil += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    hasil += arr2[i];
  }
  return hasil;
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
