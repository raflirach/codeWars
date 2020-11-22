function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  }
  return false;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, false));
