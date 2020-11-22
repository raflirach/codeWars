function generateBC(url, separator) {
  let urlSplit = url.split("/");
  let forb = [
    "the",
    "of",
    "in",
    "from",
    "by",
    "with",
    "and",
    "or",
    "for",
    "to",
    "at",
    "a",
  ];
  urlSplit[urlSplit.length - 1] = urlSplit[urlSplit.length - 1].split(".", 1);
  urlSplit[urlSplit.length - 1] = urlSplit[urlSplit.length - 1][0];
  if (urlSplit[urlSplit.length - 1].toUpperCase() === "INDEX") {
    urlSplit.pop();
  }
  urlSplit[urlSplit.length - 1] = urlSplit[urlSplit.length - 1].split("-");
  urlSplit[urlSplit.length - 1] = urlSplit[urlSplit.length - 1].join(" ");
  for (let i = 0; i < urlSplit.length; i++) {
    if (i === 0) urlSplit[i] = `<a href="/">HOME</a>`;
    else if (i === urlSplit.length - 1) {
      if (urlSplit[i].length > 30) {
        urlSplit[i] = urlSplit[i].split(" ");
        let newWord = "";
        for (let j = 0; j < urlSplit[i].length; j++) {
          flag = 0;
          for (let k = 0; k < forb.length; k++) {
            if (urlSplit[i][j] === forb[k]) {
              flag = 1;
            }
          }
          if (!flag) {
            newWord += urlSplit[i][j][0];
          }
        }
        urlSplit[i] = `<span class="active">${newWord.toUpperCase()}</span>`;
      } else {
        urlSplit[i] = `<span class="active">${urlSplit[
          i
        ].toUpperCase()}</span>`;
      }
    } else {
      if (urlSplit[i].length > 30) {
        urlSplit[i] = urlSplit[i].split("-");
        let newWord = "";
        for (let j = 0; j < urlSplit[i].length; j++) {
          flag = 0;
          for (let k = 0; k < forb.length; k++) {
            if (urlSplit[i][j] === forb[k]) {
              flag = 1;
            }
          }
          if (!flag) {
            newWord += urlSplit[i][j][0];
          }
        }
        urlSplit[i] = `<a href="/${urlSplit[i].join(
          "-"
        )}/">${newWord.toUpperCase()}</a>`;
      } else {
        urlSplit[i] = `<a href="/${urlSplit[i]}/">${urlSplit[
          i
        ].toUpperCase()}</a>`;
      }
    }
  }
  urlSplit = urlSplit.join(separator);
  return urlSplit;
}

console.log(generateBC("mysite.com/pictures/holidays.html", " : "));
//'<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
console.log(generateBC("www.codewars.com/users/GiacomoSorbi", " / "));
// //'<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
console.log(
  generateBC(
    "www.microsoft.com/important/confidential/docs/index.htm#top",
    " * "
  )
);
// //'<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>'
console.log(
  generateBC(
    "mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp",
    " > "
  )
);
//'<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
console.log(
  generateBC(
    "www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi",
    " + "
  )
);
//'<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'

console.log(
  generateBC(
    "https://www.codewars.com/most-viewed/bladder-cauterization-transmutation/immunity-for-pippi-biotechnology-bed-of-a-of-at-immunity/pictures-you-wished-you-never-saw-but-you-cannot-unsee-now",
    " ; "
  )
);
