// Type conversion
const word = "120";
console.log(12 + Number(word));

const num = 12;
console.log("my age is " + String(num));

// type coersion

console.log("12" + 12 + "14"); // This will give the string 121214 as the + operator will convert the number into the string
console.log("12" - "10"); // this will give the output as 2 becausr the - operator will convert the string into the number
console.log("12" * "2"); // * will convert tthe string into the number
console.log("15" / "3"); // (/) will convert the string into the number and will perform the division operartion
console.log("14" > "12"); // > WILL CONVERT THE STRING INTO THE NUMBER
// example

let n = "10" + 12;
n -= 12;
n--;
console.log(`the number is the ${n}`);
