arr = [3, 10, 3, 3, 3];

function findUniq(arr) {
  obj = {};
  arr.map((v) => (obj[v] ? obj[v]++ : (obj[v] = 1)));
  for (const key in obj) {
    if (obj[key] === 1) return key;
  }
}

console.log(findUniq(arr));
