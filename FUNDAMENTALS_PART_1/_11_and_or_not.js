// and operator is written as &&
// or operator is written as ||
// and operator is written as !

let age = true;
let age2 = false;

if (age && age2) {
  console.log("both the age and age2 are true");
} else if (age || age2) {
  console.log("one is true and one is false");
} else {
  console.log("both are false");
}
