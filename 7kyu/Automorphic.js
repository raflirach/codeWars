const automorphic = (n) =>
  (n ** 2).toString().match(n.toString()) ? "Automorphic" : "Not!!";

console.log(automorphic(95));
n = 95;
console.log(n.toString()[n.toString().length - 1]);
console.log((n ** 2).toString()[(n ** 2).toString().length - 1]);
