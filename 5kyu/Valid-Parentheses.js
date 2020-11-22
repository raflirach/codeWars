str = "(())((()())())";

const test = (str) => {
  let left = 0;
  let rifht = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") left++;
    else rifht++;
    if (rifht > left) {
      return false;
    }
  }
  if (left !== rifht) return false;
  return true;
};

console.log(test("()"));
console.log(test(")(()))"));
console.log(test("("));
console.log(test("(())((()())())"));

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
