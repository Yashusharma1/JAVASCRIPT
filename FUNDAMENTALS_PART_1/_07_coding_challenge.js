/*
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)

*/

let MarksWeight = 78;
let MarksHeight = 1.69;

let JohnWeight = 92;
let JohnHeight = 1.95;

MarksBMI = MarksWeight / MarksHeight ** 2;
console.log(MarksBMI);
johnBMI = JohnWeight / JohnHeight ** 2;
console.log(johnBMI);

if (MarksBMI > johnBMI) {
  console.log(
    `marks bmi is greater than that of john by ${MarksBMI - johnBMI}`
  );
} else {
  console.log(
    `john Bmi is greater than that of the marks by ${johnBMI - MarksBMI}`
  );
}
console.log(typeof 12);
