const domainName = (url) => {
  let flag = 1;
  let hasil = "";
  let arr = ["http://", "www.", "https://"];
  for (let i = 0; i < arr.length; i++) {
    url = url.replace(arr[i], "");
  }
  for (let i = 0; i < url.length; i++) {
    if (url[i] === ".") {
      flag = 0;
    }
    if (flag) {
      hasil += url[i];
    }
  }
  return hasil;
};

console.log(domainName("http://google.com")); //"google"
console.log(domainName("http://google.co.jp")); //"google"
console.log(domainName("www.xakep.ru")); //"xakep"
console.log(domainName("https://youtube.com")); //"youtube"
