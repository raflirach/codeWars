const evensAndOdds = (num) =>
  num % 2 === 0 ? (num >>> 0).toString(2) : num.toString(16);

console.log(evensAndOdds(2)); // 10
console.log(evensAndOdds(13)); // 'd'
