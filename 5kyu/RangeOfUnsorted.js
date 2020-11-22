const split = (arr, num) => {
  str2 = [];
  counter = 0;
  for (let i = 0; i < arr.length - (num - 1); i++) {
    let temp = "";
    for (let j = 0; j < num; j++) {
      temp += arr[j + counter];
    }
    str2.push(temp);
    counter++;
  }
  return str2;
};

function mysteryRange(s, n) {
  arr1 = split(s, Math.ceil(s.length / n) - 1);
  arr2 = split(s, Math.ceil(s.length / n));
  highest = 0;
  hasil = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] - arr1[j] === n - 1) {
        if (arr2[i] > highest && arr2.match()) {
          highest = arr2[i];
          hasil[0] = arr1[j];
          hasil[1] = arr2[i];
        }
      }
    }
  }
  return [hasil, arr2];
}
console.log(mysteryRange("1568141291110137", 10)); // [6, 15]

console.log(mysteryRange("6291211413114538107", 14)); // [1,14]],
console.log(mysteryRange("13161820142119101112917232215", 15)); // [9,23]],
console.log(mysteryRange("2318134142120517221910151678611129", 20)); //[4,23]],
console.log(
  mysteryRange("10610211511099104113100116105103101111114107108112109", 18)
); //[99,116]],
