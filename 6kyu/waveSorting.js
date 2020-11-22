function waveSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 === 0) {
      if (arr[i] <= arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    } else {
      if (arr[i] >= arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
}

console.log(waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]));
