kata = "sTreSS";

function first(kata){
    obj = {};
    kata.split("").map((v) => (obj[v.toLowerCase()] || obj[v] === v.toLowerCase() ? obj[v.toLowerCase()]++ : (obj[v.toLowerCase()] = 1)));
    for (let i = 0; i < kata.length; i++) {
        for (const key in obj) {
            if (obj[key]===1) {
                if (kata[i]===key || kata[i] === key.toUpperCase()) {
                    return kata[i]
                }
            }
        }
    }
}

console.log(first(kata));


