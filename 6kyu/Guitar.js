const turnChordsIntoTab = (chords) => {
  chords = chords.split(" ");
  obj = {
    Am: ["0", "1", "2", "2", "0", "-", "Am"],
    C: ["0", "1", "0", "2", "3", "-", "C"],
    D: ["2", "3", "2", "0", "-", "-", "D"],
    G: ["3", "0", "0", "0", "2", "3", "G"],
  };
  chord = [["e|", "B|", "G|", "D|", "A|", "E|", "  "]];

  for (let i = 0; i < chords.length; i++) {
    for (const key in obj) {
      if (chords[i] === key) {
        chord.push(obj[key]);
      }
    }
  }

  let text = "";
  let isEnd = false;
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < chord.length; i++) {
      if (i === 0) {
        text += `${chord[i][j]}`;
      } else {
        text += chord[i][j];
      }
      if (j === 6) {
        if (i !== chord.length - 1) {
          if (chord[i][j] !== "Am") {
            text += "   ";
          } else text += "  ";
        } else isEnd = true;
      } else text += "---";
    }
    if (!isEnd) {
      if (j === 6) {
        text += "\n";
      } else text += "|\n";
    }
  }
  return text;
};

str = "Am C Am G Am C Am D Am";
console.log(turnChordsIntoTab(str));
// str = str.split(" ");
// for (let i = 0; i < str.length; i++) {
//   for (const key in obj) {
//     if (str[i] === key) {
//       chord.push(obj[key]);
//     }
//   }
// }
// console.log(chord);

// // e|---0---|
// // B|---1---|
// // G|---2---|
// // D|---2---|
// // A|---0---|
// // E|-------|
// //      Am
// let text = "";
// for (let j = 0; j < 7; j++) {
//   for (let i = 0; i < chord.length; i++) {
//     if (i === 0) {
//       text += `${chord[i][j]}`;
//     } else {
//       text += chord[i][j];
//     }
//     if (j === 6) {
//       if (chord[i][j] !== "Am") {
//         text += "   ";
//       } else text += "  ";
//     } else text += "---";
//   }
//   if (j === 6) text += "\n";
//   else text += "|\n";
// }

// console.log(text);
