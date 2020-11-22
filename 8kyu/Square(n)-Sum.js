function squareSum(numbers) {
  hasil = 0;
  for (let j = 0; j < numbers.length; j++) {
    hasil += numbers[j] ** 2;
  }
  return hasil;
}

console.log(squareSum([1, 2])); //5
console.log(squareSum([0, 3, 4, 5])); //50
