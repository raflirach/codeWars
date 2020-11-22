function duplicateCount(text) {
  const obj = {};
  let count = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (obj[text[i]]) obj[text[i]]++;
    else obj[text[i]] = 1;
  }
  for (const key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
