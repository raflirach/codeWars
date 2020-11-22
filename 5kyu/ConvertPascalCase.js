function toUnderscore(string) {
    string = string.toString()
    let string2 = string.toLowerCase()
    hasil = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string2[i] && i !== 0) {
            hasil += `_${string2[i]}`
        }else{
            hasil += string2[i]
        }
    }
    return hasil
}

console.log(toUnderscore(1));