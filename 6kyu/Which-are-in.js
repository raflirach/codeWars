function inArray(array1, array2) {
  hasil = [];
  for (let i = 0; i < array1.length; i++) {
    flag = 0;
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].match(array1[i])) {
        flag = 1;
      }
    }
    if (flag && array1[i]) {
      hasil.push(array1[i]);
    }
  }
  return hasil.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2)); // ["live", "strong"]
a1 = ["live", "strong", "arp", undefined];
console.log(inArray(a1, a2)); // ["arp", "live", "strong"]
a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2)); // []
