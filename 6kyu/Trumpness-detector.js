function trumpDetector(trumpySpeech) {
  const vowel = "AIUEO";
  trumpySpeech = trumpySpeech.toUpperCase();
  kata = "";
  extra = 0;
  vwl = 0;
  for (let i = 0; i < trumpySpeech.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (
        trumpySpeech[i] === trumpySpeech[i + 1] &&
        trumpySpeech[i] === vowel[j]
      ) {
        extra += 1;
      } else if (
        trumpySpeech[i] !== trumpySpeech[i + 1] &&
        trumpySpeech[i] === vowel[j]
      ) {
        vwl += 1;
      }
    }
  }
  return Math.round((extra / vwl + Number.EPSILON) * 100) / 100;
}

console.log(trumpDetector("I will build a huge wall")); // 0
console.log(trumpDetector("HUUUUUGEEEE WAAAAAALL")); // 4
console.log(trumpDetector("MEXICAAAAAAAANS GOOOO HOOOMEEEE")); // 2.5
console.log(trumpDetector("America NUUUUUKEEEE Oooobaaaamaaaaa")); //1.89
console.log(trumpDetector("listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT")); //1.56
