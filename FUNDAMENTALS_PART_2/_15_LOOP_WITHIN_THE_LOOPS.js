"use strict";

const yashu = [12, 13, "yashu ", "Sharma", "Btech"];

for (let a = 0; a < yashu.length; a++) {
  console.log(yashu[a]);
}

// LOOPS WITHIN THE LOOPS

for (let b = 0; b < 3; b++) {
  console.log(`------- starting the exercise${b}`);

  for (let c = 0; c < 6; c++) {
    console.log(`The first exercise is ${c} reps`);
  }
}

let x = Math.trunc(Math.random() * 6) + 1;

// RANDOM NUMBER RETURN FROM THE 0 TO 1
//  MATH TRUNC WILL RETURN THE NUMBER REMOVING THE FRACTIONAL PARAT

console.log(x);

while (x != 6) {
  console.log(`the  random number is${x}`);
  x = Math.trunc(Math.random() * 6) + 1;
  if (x == 6) {
    console.log(`loop is about to end...`);
  }
}
