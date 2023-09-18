const yashu = ["yashu", 29, "sharma", 2012 - 1212, true];

for (let i = 0; i <= yashu.length - 1; i++) {
  console.log(yashu[i]);
  console.log(typeof yashu[i]);
}

let types = [];
for (let j = 0; j < yashu.length; j++) {
  types[j] = typeof yashu[j];
}
console.log(types);

// OTHER METHOD USING THE PUSH AND THE POP METHOD
let y = [];
for (let k = 0; k < yashu.length; k++) {
  y.push(typeof yashu[k]);
}

const age = [12, 13, 14, 15, 16, 17, 18, 19];
const age2 = [];

for (let f = 0; f < age.length; f++) {
  age2.push(20 - age[f]);
}

console.log(age);

// CONTINUE
// CONTINUE STATEMENT IS USED TO TERMINATE THE STATEMENT AND NOT BREAK THE FULL STATEMENT
for (let a = 0; a < age.length; a++) {
  if (age[a] > 15) continue;
  {
    console.log(`age is smaller than the ${age[a]}`);
  }
}
// BREAK STATEMENT : BREAK IS USED TO THE FULL LOOP STATEMENT
// RATHER THAN THE FULL STATEMENT AND COMES OUT OF THE LOOP

for (let b = 0; b < age.length; b++) {
  if (age[b] > 15) break;
  {
    console.log(`age is smaller than the ${age[b]}`);
  }
}
