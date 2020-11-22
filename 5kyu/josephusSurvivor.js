function josephusSurvivor(n, k) {
  let items = [];
  for (let i = 0; i < n; i++) {
    items.push(i + 1);
  }
  let i = 0;
  let z = k - 1;
  while (items.length !== 1) {
    if (i === 0) {
      k = z;
      while (k >= items.length) {
        k -= items.length;
      }
    } else {
      k += z;
      while (k >= items.length) {
        k -= items.length;
      }
    }
    i++;
    items.splice(k, 1)[0];
  }
  return items[0];
}

console.log(josephusSurvivor(100, 1));
