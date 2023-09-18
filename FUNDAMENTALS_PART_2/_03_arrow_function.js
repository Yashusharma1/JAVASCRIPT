'use strict';
// arrow function : this function is same as other function but in this we do not have to write the return function it is done esplictily

const ben = birthyer => 2012 - birthyer;

console.log(ben(1200));

// year of retirment

const yearOfRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  // return retirment;
  return `${firstname} can work for more ${retirment} year`;
};

console.log(yearOfRetirement(2017, ' yash'));
