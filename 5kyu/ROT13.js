const rot1 = 'abcdefghijklmABCDEFGHIJLM'
const rot2 = 'nopqrstuvwxyzNOPQRSTUVWXYZ'

kata = "This is my first ROT13 excercise!"

spl = kata.split('')

let index = -1
text = ''
for (let i = 0; i < spl.length; i++) {
    if(rot1.indexOf(spl[i]) >= 0){
        index = rot1.indexOf(spl[i]);
        text += rot2[index]
    }else if(rot2.indexOf(spl[i]) >= 0){
        index = rot2.indexOf(spl[i]);
        text += rot1[index]
    }else{
        text += spl[i]
    }

}

console.log(text)

function rot13(str) {
    const rot1 = 'abcdefghijklmABCDEFGHIJLM'
    const rot2 = 'nopqrstuvwxyzNOPQRSTUVWXYZ'
    
    return str
    .split('')
    .map(v => rot1.indexOf(v) >= 0 ? rot2[rot1.indexOf(v)] : rot2.indexOf(v) >= 0 ? rot1[rot2.indexOf(v)] : v)
    .join('')
}

console.log(rot13(kata));