function convert(s) {
  s = s.toLowerCase();
  let base = "",
    obj = {},
    count = 2;
  for (let i = 0; i < s.length; i++) {
    console.log(obj.hasOwnProperty(s[i]));
    if (!obj.hasOwnProperty(s[i])) {
      if (i < 1) {
        obj[s[i]] = 1;
      } else if (Object.entries(obj).length === 1) {
        obj[s[i]] = 0;
      } else {
        obj[s[i]] = count;
        count++;
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    base += obj[s[i]];
  }
  return base;
}
console.log(convert("CodeWars")); //10234567
console.log(convert("KATA")); // 1020

console.log();
