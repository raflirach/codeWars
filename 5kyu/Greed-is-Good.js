function score(dice) {
  let score = 0;
  temp = [];
  for (let i = 0; i < dice.length; i++) {
    let flag = 0;
    for (let j = 0; j < temp.length; j++) {
      if (dice[i] === temp[j]) {
        flag = 1;
      }
    }
    if (!flag) {
      temp.push(dice[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    let count = 0;
    for (let j = 0; j < dice.length; j++) {
      let push = false;
      if (temp[i] === dice[j]) {
        count++;
      }
      if (count === 3) {
        push = true;
      }
      if (push) {
        if (temp[i] === 1) {
          score += temp[i] * 1000;
          count = 0;
        } else {
          score += temp[i] * 100;
          count = 0;
        }
      }
    }
    if (temp[i] === 5 && count < 3) {
      score += 50 * count;
    } else if (temp[i] === 1 && count < 3) {
      score += 100 * count;
    }
  }
  return score;
}

console.log(score([2, 3, 4, 6, 2]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([2, 4, 4, 5, 4]));
console.log(score([1, 1, 1, 3, 1]));
