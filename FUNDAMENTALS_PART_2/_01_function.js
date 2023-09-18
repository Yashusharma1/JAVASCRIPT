'use strict';

// it will help us to find the small mistake that can help in solving the problem easily
// function , invoking ,calling

//Syntax variable are used to store the value while function are used to store the line of code

// function giveAName(parameter,parameter){
//     // give the code that we want to use number of the time
//     return something ; // in this we give something we want to return
// }

function logger(apple, banana) {
  console.log(apple, banana);
  const juice = `The juice is made of${apple} apple and ${banana} banaana`;
  return juice; // this will return the juice string but if we want to use than we have to save the string in the other string
}

const juicer = logger(5, 6); // This will give the return the value so we have to assign the logger into the other variable
console.log(juicer);
// Or we can directly put the value in the console part but the value will only be printed but not be saved
console.log(logger(2, 3));
