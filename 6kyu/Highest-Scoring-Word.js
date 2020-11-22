function high(x) {
  const vocal = "abcdefghijklmnopqrstuvwxyz";
  str = x;
  str = str.split(" ");
  hasil = [];
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split("").map((x) => x);
    console.log(str[i]);
    arr = str[i].map((v) => vocal.indexOf(v) + 1).reduce((a, b) => a + b);
    console.log(arr);
    hasil.push(arr);
  }
  console.log(hasil);
  return x.split(" ")[hasil.indexOf(Math.max(...hasil))];
}

console.log(
  high(
    "piujyreuvagzegigxpn kfvqfmnmykzcsdrwknj wupybdyqwgvjjqmtsjt kqmtojrxsugqfqocizh"
  )
);
