"use strict";
// there are two types of functiion

// function declaration

function age8(birthYear) {
  return 2023 - birthYear;
}
const age1 = age8(2000); // in this we can declare this part before the starting of we declare
//   the function but we cannot do the same with the function expression

// function expresion - as we expression are the line of code that prouce a value

const age9 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = age9(2012);

console.log(age1, age2);
